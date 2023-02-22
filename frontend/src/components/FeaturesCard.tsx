import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import api from '../api/api'
import React from 'react'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];
interface movie {

  name: string;

  cast: string;
  
  description:string;

}
export function FeaturesCard(props :movie) {
  const { classes } = useStyles();


const baseURL = "http://localhost:5570/m/Movies"

  const features = mockdata.map((feature) => (
    <Center key={props.name}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{props.cast}</Text>
    </Center>
  ));


  return (
   
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src="https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so" alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}> {props.name}</Text>
          <Text size="xs" color="dimmed">
            {}
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Cast
        </Text>

        <Group spacing={8} mb={-8}>
          {props.name}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              $9.99
            </Text>
            {/* <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
              per day
            </Text> */}
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Watch now
          </Button>
        </Group>
      </Card.Section>
    </Card>
    
 
  );
}