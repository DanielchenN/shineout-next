export interface Local {
  cn: string;
  en: string;
}

export interface Header {
  title: Local;
  describe: Local;
}

export interface Example {
  propName: Local;
  propDescribe: Local;
  component: React.FC;
  code: string;
}

export interface MarkdownProps {
  header: {
    name: string;
    group: string;
  };
  title: Local;
  describe: Local;
  examples: Example[];
}