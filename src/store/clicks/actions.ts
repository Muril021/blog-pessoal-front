export type Action = {
    type: 'CHANGE_CLICKS';
    payload: number;
};

export const changeClicks = (clicks: number) => ({
    type: 'CHANGE_CLICKS',
    payload: clicks,
});