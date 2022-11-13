import dayjs from 'dayjs';
import 'dayjs/locale/bn';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import preParsePostFormat from 'dayjs/plugin/preParsePostFormat';

dayjs.locale('bn');
dayjs.extend(localizedFormat);
dayjs.extend(preParsePostFormat);

export { dayjs };
