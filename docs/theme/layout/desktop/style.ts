import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    desktop: {
      width: '100%',
      height: '100%',
      overflow: 'auto',
      position: 'relative',
    },

    nav: {
      position: 'sticky',
      top: 0,
      height: 59,
      width: '100%',
      display: 'flex',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid rgb(229,230,235)',
      zIndex: 2,
      '& .left-nav': {
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        position: 'relative',
        '&::after': {
          content: '" "',
          position: 'absolute',
          right: 0,
          width: 1,
          height: 24,
          top: 18,
          backgroundColor: '#E8EBF0',
        },
      },
      '& .entry': {
        // gap: 12,
        width: '100%',
        fontWeight: '700',
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 16px',
        '& li': {
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            color: '#999999',
          },
        },
      },
    },

    main: {
      width: '100%',
      height: '100%',
      marginTop: 60,
      '& .component': {
        float: 'left',
        width: '100%',
        height: '100%',
        paddingLeft: 260,
        boxSizing: 'border-box',
      },
    },

    menu: {
      position: 'sticky',
      overflow: 'auto',
      float: 'left',
      top: 60,
      width: 259,
      height: 'calc(100% - 60px)',
      borderRight: '1px solid rgba(232, 235, 240, 1)',
      listStyle: 'none',
      margin: 0,
      fontSize: 14,
      padding: '0 16px',
      color: '#aaaaaa',
      boxSizing: 'border-box',
      '& .group': {
        height: 40,
        padding: '0 20px',
        lineHeight: '40px',
      },
      '& .doc': {
        height: 40,
        padding: '0 20px',
        lineHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& span': {
          display: 'inline-block',
          width: 120,
          textAlign: 'center',
          cursor: 'pointer',
          '&:hover': {
            color: '#999999',
          },
          '&.active': {
            color: '#000000',
          },
        },
      },
      '& ul': {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontSize: 12,
        color: '#333333',
        '& li': {
          height: 40,
          lineHeight: '40px',
          padding: '0 16px',
          cursor: 'pointer',
          borderRadius: 4,
          '&.active': {
            color: '#197AFA',
            fontWeight: 500,
            backgroundColor: '#E9F5FE',
          },
          '&:hover': {
            backgroundColor: '#E9F5FE',
          },
        },
      },
    },

    content: {
      flex: 1,
      width: '100%',
      height: '100%',
    },

    anchor: {
      position: 'fixed',
      right: 20,
      top: 305,
      minWidth: 180,
      width: 180,
      height: 'calc(100% - 345px)',
      overflow: 'auto',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      transition: 'all ease 0.3s',
      '& a': {
        position: 'relative',
        display: 'block',
        color: 'rgba(20, 23, 55, 1)',
        textDecoration: 'none',
        height: 28,
        lineHeight: '28px',
        fontSize: 12,
        cursor: 'pointer',
        padding: '0 12px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        // overflow: 'hidden',
        '&.active': {
          color: '#197AFA',
          '&::before': {
            content: '" "',
            position: 'absolute',
            zIndex: 1,
            left: 0,
            top: 0,
            width: 1,
            height: 28,
            backgroundColor: '#197AFA',
          },
        },
        '&:hover': {
          color: '#197AFA',
        },
        '&::after': {
          content: '" "',
          position: 'absolute',
          left: 0,
          top: 0,
          width: 1,
          height: 28,
          backgroundColor: '#E8EBF0',
        },
      },
    },

    stickyAnchor: {
      top: 220,
      height: 'calc(100% - 260px)',
    },

    relative: {
      position: 'fixed',
      height: 1,
      background: 'red',
      width: '100%',
      top: '30%',
      left: 0,
    },

    footer: {
      width: '100%',
      height: 500,
      marginTop: 100,
      background: '#f7f8fa',
    },
  },
  { name: 'doc-layout' },
);
