import { Card } from '@/components/ui/card';

interface AccountCardProps {
  params: {
    header: string;
    description: string;
    price?: number;
  };
  children: React.ReactNode;
}

export function AccountCard({ params, children }: AccountCardProps) {
  const { header, description } = params;
  return (
    <Card>
      <div id="body" className="p-4">
        <h3 className="text-xl font-semibold">{header}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {children}
    </Card>
  );
}

export function AccountCardBody({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function AccountCardFooter({
  description,
  children,
}: {
  children: React.ReactNode;
  description: string;
}) {
  return (
    <div
      className="flex items-center justify-between rounded-b-lg border bg-muted p-4 dark:bg-card"
      id="footer"
    >
      <p className="text-sm text-muted-foreground">{description}</p>
      {children}
    </div>
  );
}
