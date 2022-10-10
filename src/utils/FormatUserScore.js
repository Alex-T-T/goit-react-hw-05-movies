
export const FormatUserScore = (value) => {
        const transformValue = (value * 10).toFixed(0); 
        const userScore = value
            ? `${transformValue}%`
            : 'There is no user scores.';
        return userScore
    }