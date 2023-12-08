import { css } from '@emotion/css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { Card, Icon, LinkButton, useStyles2, useTheme2 } from '@grafana/ui';

import { achievementsByName } from './AchievementsList';
import { getUserLevel, registerAchievementCompleted } from './AchievementsService';
import { GrotIcon } from './GrotIcon';
import { AchievementId, AchievementLevel } from './types';
import { useAchievements } from './useAchievements';
import { getProgress } from './utils';

interface AchievementCardProps {
  title: string;
  level: AchievementLevel;
}

export const AchievementCard = ({ title, level }: AchievementCardProps) => {
  const styles = useStyles2(getStyles);
  const theme = useTheme2();

  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    getUserLevel().then((level) => {
      setExpanded(title === achievementsByName[level]);
    });
  }, [title]);

  const { achievementsList } = useAchievements();
  const achievementsListByLevel =
    achievementsList && achievementsList.filter((achievement) => achievement.level === level);

  const achievementsCompleted = achievementsListByLevel?.filter((achievement) => achievement.completed).length!;
  const totalAchievementsByLevel = achievementsListByLevel?.length!;

  const progressByLevel = achievementsListByLevel ? getProgress(achievementsCompleted, totalAchievementsByLevel) : 0;

  const markVideoAsComplete = (id: AchievementId) => {
    registerAchievementCompleted(id);
  };

  return (
    <div className={styles.wrapper}>
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={title}
          sx={{ backgroundColor: theme.colors.background.secondary }}
        >
          <div className={styles.summaryContent} style={{ width: '90%', flexShrink: 0 }}>
            <span className={styles.levelIcon}>
              <GrotIcon level={level} height={25} />
            </span>
            <Box className={styles.progressBox}>
              <CircularProgress
                variant="determinate"
                value={progressByLevel}
                sx={{ color: theme.colors.warning.main }}
              />
              <Box className={styles.progressText}>{`${progressByLevel}%`}</Box>
            </Box>
            <h4 style={{ color: theme.colors.text.primary, marginTop: '10px' }}>{title}</h4>
          </div>
          <div className={styles.summaryContent} style={{ color: theme.colors.text.secondary }}>
            {achievementsCompleted} / {totalAchievementsByLevel} completed
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: theme.colors.background.primary }}>
          {achievementsListByLevel?.map((achievement, index) => {
            return (
              <Card key={index} id={achievement.id}>
                <Card.Figure>
                  {achievement.completed ? (
                    <Icon
                      name={'check-circle'}
                      aria-label={'check-circle'}
                      className={styles.achievementCompleteIcon}
                    />
                  ) : (
                    <Icon
                      name={achievement.icon ?? 'grafana'}
                      aria-label={achievement.icon ?? 'grafana'}
                      className={styles.achievementIcon}
                    />
                  )}
                </Card.Figure>
                <Card.Heading>{achievement.title}</Card.Heading>
                <Card.Description>{achievement.description}</Card.Description>
                <Card.Actions>
                  {achievement.video && (
                    <iframe
                      width="300"
                      height="181"
                      src={achievement.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  )}
                </Card.Actions>
                <Card.SecondaryActions>
                  {achievement.link && (
                    <LinkButton
                      href={achievement.link}
                      icon="external-link-alt"
                      target="_blank"
                      size="sm"
                      variant="secondary"
                    >
                      Learn more
                    </LinkButton>
                  )}
                  {achievement.video && (
                    <LinkButton
                      size="sm"
                      variant="secondary"
                      onClick={() => markVideoAsComplete(achievement.id)}
                      disabled={achievement.completed}
                    >
                      Mark as complete
                    </LinkButton>
                  )}
                </Card.SecondaryActions>
              </Card>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const getStyles = (theme: GrafanaTheme2) => ({
  wrapper: css({
    padding: '1px',
  }),
  progressText: css({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.text.secondary,
    fontSize: 10,
  }),
  icon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '5px',
  }),
  achievementCompleteIcon: css({
    color: theme.colors.warning.main,
    height: '20px',
    width: '20px',
  }),
  achievementIcon: css({
    color: theme.colors.text.secondary,
    height: '20px',
    width: '20px',
  }),
  progressBox: css({
    position: 'relative',
    display: 'inline-flex',
    marginRight: '10px',
    marginLeft: '5px',
  }),
  summaryContent: css({
    display: 'flex',
    alignItems: 'center',
  }),
  levelIcon: css({
    minWidth: '30px',
  }),
});