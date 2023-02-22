
import { useState } from 'react';
import {SideNav} from './components/SideNav';
import axios from 'axios';
import {FeaturesCard} from './components/FeaturesCard';
import React from 'react'
import {AppShell,Navbar,
Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  createStyles,
  SimpleGrid
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import {HeaderMegaMenu} from './components/HeaderMegaMenu';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
    linkActive: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },
    root: {
      position: 'relative',
      zIndex: 1,
    },
  
    dropdown: {
      position: 'absolute',
      top: 60,
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: 'hidden',
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      lineHeight: 1,
      padding: '8px 12px',
      borderRadius: theme.radius.sm,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
  
      [theme.fn.smallerThan('sm')]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },
  
  
  
  };
});


export default function App() {
    const theme = useMantineTheme();
    const [data, setdata] = React.useState([]);
    const { classes, cx } = useStyles();
  const [opened, setOpened] = useState(false);
  React.useEffect(() => {
    const fetchData = async () =>{
  
    
        const {data: response} = await axios.get('http://localhost:5570/m/Movies');
        setdata(response);
       
        console.table(response);
  
    }
  
    fetchData();
  }, []);
  return (
   <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
        
        
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <SideNav></SideNav>
        </Navbar>
      }
    
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <HeaderMegaMenu></HeaderMegaMenu>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

     
          </div>
        </Header>
      }
    >
      <Text>FeaturesCard</Text>
      <SimpleGrid cols={4} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
  
      <FeaturesCard name='Titanic' cast="[ss],[cc]" description='some movies'/>
    

      </SimpleGrid>
    </AppShell>
  );
}