import { Tooltip } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { TooltipProps } from "@chakra-ui/tooltip/dist/declarations/src/tooltip";

const TouchFriendlyTooltip: FC<TooltipProps> = (props) => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);
  const tooltipProps = {
    ...props,
    children: undefined,
  };

  const setDebouncer = () => {
    window.localStorage.setItem("tooltip_debouncer", "active");
    setTimeout(
      () => window.localStorage.setItem("tooltip_debouncer", "inactive"),
      10
    );
  };

  const getDebouncer = () =>
    window.localStorage.getItem("tooltip_debouncer") === "active";

  useEffect(() => {
    const handleClickOutside = () => {
      if (isLabelOpen && !getDebouncer()) {
        setIsLabelOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isLabelOpen]);

  return (
    <Tooltip {...tooltipProps} isOpen={isLabelOpen}>
      <span
        onMouseEnter={() => setIsLabelOpen(true)}
        onMouseLeave={() => setIsLabelOpen(false)}
        onClick={(event: React.MouseEvent<HTMLSpanElement>) => {
          event.stopPropagation();
          setIsLabelOpen(true);
          setDebouncer();
        }}
      >
        {props.children}
      </span>
    </Tooltip>
  );
};

export default TouchFriendlyTooltip;
