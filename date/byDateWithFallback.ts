export default (now: Date | string | number) => (
  {
    endedAt: aEnd,
    startedAt: aStart
  }: { endedAt: Date | string | number; startedAt: Date | string | number },
  {
    endedAt: bEnd,
    startedAt: bStart
  }: { endedAt: Date | string | number; startedAt: Date | string | number }
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
