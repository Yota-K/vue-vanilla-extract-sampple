import { style } from '@vanilla-extract/css';

export const styles = {
  headerContainer: style({
    padding: '12px',
    boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 6px',
    marginBottom: '30px',
  }),
  title: style({
    fontSize: '28px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    color: 'white',
  }),
};
