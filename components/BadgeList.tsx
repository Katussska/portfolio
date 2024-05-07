import { Technologies } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

const BadgeList = ({ badges }: { badges: Array<Technologies> }) => (
  <div className="mb-4 flex w-full flex-row flex-wrap">
    {badges.map((badge, key) => (
      <Badge key={key}>{badge}</Badge>
    ))}
  </div>
);

export default BadgeList;
