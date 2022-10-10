import { format } from 'date-fns'



export const FormatDate = (date) => {
        const finalDate = date
            ? `(${format(new Date(date), 'yyyy')})`
            : '';
        return finalDate;
    };