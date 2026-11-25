"use client";

import React, { useEffect, useRef, useState } from "react";
import type { IconHandle, PulsoIcon, BaseIconProps } from "pulsoicon-react";

export type IconAnimationMode = "hover" | "loop" | "infinite" | "active" | "static";

export interface InteractiveIconProps extends BaseIconProps {
  icon: PulsoIcon;
  mode?: IconAnimationMode;
  /** Milliseconds to wait between cycles when mode="loop" (defaults to 4000ms) */
  intervalMs?: number;
  /** Controlled active state when mode="active" */
  active?: boolean;
  className?: string;
}

/**
 * InteractiveIcon wraps PulsoIcon with explicit interaction modes:
 * - `hover` (default): Plays on hover/focus of parent button/link/card (data-icon-trigger).
 * - `loop`: Plays periodically with a calm pause (e.g. live desk signals, active status).
 * - `infinite`: Plays continuously in an unbroken rhythm (process tracking, ticker badges).
 * - `active`: Plays driven by state (tab selection, accordion expansion, form validation).
 * - `static`: Static rendering with motion disabled.
 */
export default function InteractiveIcon({
  icon: IconComponent,
  mode = "hover",
  intervalMs = 4000,
  active = false,
  className = "",
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  ...rest
}: InteractiveIconProps) {
  const iconRef = useRef<IconHandle>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Periodic Loop effect (calm, editorial pulse)
  useEffect(() => {
    if (mode !== "loop") return;

    let isMounted = true;
    let timer: NodeJS.Timeout;

    const runLoop = async () => {
      while (isMounted) {
        if (iconRef.current?.startAnimation) {
          try {
            await iconRef.current.startAnimation();
          } catch {
            // gracefully ignore if cancelled
          }
        }
        await new Promise((r) => {
          timer = setTimeout(r, intervalMs);
        });
      }
    };

    runLoop();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [mode, intervalMs]);

  // Infinite effect (continuous rhythm)
  useEffect(() => {
    if (mode !== "infinite") return;

    let isMounted = true;
    let timer: NodeJS.Timeout;

    const runInfinite = async () => {
      while (isMounted) {
        if (iconRef.current?.startAnimation) {
          try {
            await iconRef.current.startAnimation();
          } catch {
            // ignore
          }
        }
        await new Promise((r) => {
          timer = setTimeout(r, 600);
        });
      }
    };

    runInfinite();

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [mode]);

  // Active state-driven trigger
  useEffect(() => {
    if (mode === "active") {
      setIsPlaying(active);
    }
  }, [mode, active]);

  if (mode === "static") {
    return (
      <IconComponent
        animated={false}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        {...rest}
      />
    );
  }

  if (mode === "loop" || mode === "infinite") {
    return (
      <IconComponent
        ref={iconRef}
        autoAnimated={false}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        {...rest}
      />
    );
  }

  if (mode === "active") {
    return (
      <IconComponent
        autoAnimated={false}
        play={isPlaying}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        className={className}
        {...rest}
      />
    );
  }

  // mode="hover": native pulsoicon automatic trigger on closest button/link/container
  return (
    <IconComponent
      autoAnimated={true}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...rest}
    />
  );
}
