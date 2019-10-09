export default now => (
  { endedAt: aEnd, startedAt: aStart },
  { endedAt: bEnd, startedAt: bStart }
) => {
  const aEndDate = new Date(aEnd || now);
  const aStartDate = new Date(aStart || now);
  const bEndDate = new Date(bEnd || now);
  const bStartDate = new Date(bStart || now);
  const aEndDateValue = aEndDate.valueOf();
  const aStartDateValue = aStartDate.valueOf();
  const bEndDateValue = bEndDate.valueOf();
  const bStartDateValue = bStartDate.valueOf();
  const startDateDifference = aStartDateValue - bStartDateValue;
  const startDatesEqual = startDateDifference === 0;
  return startDatesEqual ? aEndDateValue - bEndDateValue : startDateDifference;
};
