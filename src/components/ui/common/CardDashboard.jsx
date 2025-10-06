import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Badge } from "../badge";

const CardDashboard = ({ header, title, description, footer, stat }) => {
  return (
    <div>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>{header}</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {title}
          </CardTitle>
          <CardAction>
            <Badge variant="default">{stat}</Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {description}
          </div>
          <div className="text-muted-foreground">{footer}</div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardDashboard;
