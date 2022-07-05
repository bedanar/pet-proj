import React from 'react';
import styles from './text.css';
import classNames from 'classnames'

type TSizes = 28 | 20 | 16 | 14 | 12 | 10;
export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green', 
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  grey66 = 'grey66',
  grey99 = 'grey99',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4'
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  children?: React.ReactNode
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
  inline?: boolean;
  top?: boolean
}

export function Text({As = 'span', children, size, mobileSize, tabletSize, desktopSize, color = EColors.black, bold = false}: ITextProps) {
  const classes = classNames(
    styles[`s${size}`],
    {[styles.bold] : bold},
    {[styles[`m${mobileSize}`]] : mobileSize},
    {[styles[`d${mobileSize}`]] : desktopSize},
    {[styles[`t${mobileSize}`]] : tabletSize},
    styles[color]
  )
  return (
      <As className={classes}>
        {children}
      </As>
  );
}
