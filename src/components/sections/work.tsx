'use client';

import { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const STEP = 4;

const WorkSection = () => {
  const [visibleCount, setVisibleCount] = useState(STEP);

  const visibleProjects = PROJECTS.slice(0, visibleCount);
  const hasMore = visibleCount < PROJECTS.length;
  const remaining = PROJECTS.length - visibleCount;

  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {visibleProjects.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}

      <div className="flex justify-center gap-3">
        {hasMore && (
          <button
            onClick={() => setVisibleCount((prev) => Math.min(prev + STEP, PROJECTS.length))}
            className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Show More ({Math.min(remaining, STEP)} more)
          </button>
        )}

        {visibleCount > STEP && (
          <button
            onClick={() => setVisibleCount(STEP)}
            className="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Show Less
          </button>
        )}
      </div>
    </Container>
  );
};

export default WorkSection;