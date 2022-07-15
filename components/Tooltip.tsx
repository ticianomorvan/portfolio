import { ReactNode } from "react";
import {
  Provider,
  Root,
  Trigger,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import styles from "./Tooltip.module.css";

type TooltipType = {
  text: string;
  children: ReactNode;
};

export default function Tooltip({ text, children }: TooltipType) {
  return (
    <li>
      <Provider delayDuration={100}>
        <Root>
          <Trigger className={styles.tooltip}>{children}</Trigger>
          <Content className={styles.tooltip_content}>
            <Arrow />
            {text}
          </Content>
        </Root>
      </Provider>
    </li>
  );
}
