import { COPY, PERIOD_LABEL_FORMAT } from "@/lib/portfolio/constants";
import { dateFormatter } from "@/lib/utils/date-formatter";
import type { Period } from "@/lib/types";

const formatPoint = (point: string) =>
    point.length === 4
        ? point
        : dateFormatter(`${point}-01T00:00:00`, PERIOD_LABEL_FORMAT);

export const formatPeriod = ({ start, end }: Period) =>
    `${formatPoint(start)} – ${end ? formatPoint(end) : COPY.present}`;
