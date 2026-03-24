import { useMemo } from "react";

function getLatestRelevantDate(job) {
  return (
    job.rejectedDate ||
    job.offerDate ||
    job.interviewDate ||
    job.appliedDate ||
    ""
  );
}

function useRecentJobs(jobList, limit = 5) {
  return useMemo(() => {
    return [...jobList]
      .sort(
        (a, b) =>
          new Date(getLatestRelevantDate(b)) -
          new Date(getLatestRelevantDate(a)),
      )
      .slice(0, limit);
  }, [jobList, limit]);
}

export default useRecentJobs;
