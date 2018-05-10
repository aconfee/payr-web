import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import App from '../App.js';
import Dummy from '../components/Dummy/dummy.component';
import ListItemWithAction from '../components/ListItemWithAction/listItemWithAction.component';
import ListWithAction from '../components/ListWithAction/listWithAction.component';
import ListItem from '../components/ListItem/listItem.component';
import EmployeeCard from '../components.domain/EmployeeCard/employeeCard.component';
import EmployeeBenefits from '../components.pages/EmployeeBenefits/employeeBenefits.component';
import InputCard from '../components/InputCard/inputCard.component';

const clickAlert = () => {
  alert('Click!');
};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('App', module)
  .add('view', () => <App />);

storiesOf('Input', module)
  .add('Input Card', () => <InputCard />);

storiesOf('Dummy', module)
  .add('dummy', () => <Dummy />);

storiesOf('List Items', module)
  .add('List Item', () => <ListItem text='Item!'/>)
  .add('List Item Custom Style', () => <ListItem text='Item!' textStyle={{ fontWeight: 'bold', color: '#69F0AE' }}/>)
  .add('List Item With Action Default', () => <ListItemWithAction labelText='Kim Greenough'/>)
  .add('List Item With Action Delete', () => <ListItemWithAction labelText='Adam Estela' icon='delete'/>)
  .add('List Item With Action Show Icon On Hover', () => <ListItemWithAction labelText='Adam Estela' icon='delete' iconShowOnHover={true} />)
  .add('List Item With Action Click', () => <ListItemWithAction labelText='Adam Estela' icon='delete' onClick={ clickAlert } />)
  .add('List Item With Action Custom Style', () => <ListItemWithAction labelText='Adam Estela' icon='delete' onClick={ clickAlert } labelStyle={{ fontWeight: 'bold', color: '#00E5FF' }} />);

storiesOf('Lists', module)
  .add('List With Action', () => <ListWithAction titleText='Dependents' buttonLabelText='Add Dependent' onClick={ clickAlert } />)
  .add('List With Action With Items', () => {
    return (
      <ListWithAction titleText='Dependents' buttonLabelText='Add Dependent' onClick={ clickAlert }>
        <ListItemWithAction labelText='Uma the Skiiiiiish' icon='delete'onClick={ clickAlert }/>
        <ListItemWithAction labelText='Le Kiiiiiiiim' icon='delete' onClick={ clickAlert }/>
      </ ListWithAction>
    );
  });

storiesOf('Employee Card', module)
  .add('Default', () => {
    return (
      <EmployeeCard 
        id='Adam Estela'
        fullName='Adam Estela' 
        salary={ 48000 } 
        annualDeduction={ 1500 } 
        paycheckDeduction={ 57.69 } 
        discounts="10% Reduced - Name Begins With Letter 'A'" 
        dependents={
          [
            { id: 1, name: 'Kim Greenough' },
            { id: 2, name: 'Uma the Skish' }
          ]
        }
      />
    );
  });

storiesOf('Benefits Page', module)
  .add('Default', () => {
    const data = { 
      employees: [
        {
          id: '1',
          firstname: 'Adam',
          lastname: 'Estela',
          salary: 48000,
          totalAnnualCost: 1500,
          paycheckDeduction: 50,
          discounts: ["10% Discount - Name Begins With Letter 'A'", "Anotha One"],
          dependents: [
            { id: '1', name: 'Kim Greenough' },
            { id: '2', name: 'Uma the Skish' }
          ]
        },
        {
          id: '2',
          firstname: 'Kim',
          lastname: 'Greenough',
          salary: 80000,
          totalAnnualCost: 3300,
          paycheckDeduction: 33.05,
          discounts: [],
          dependents: [
            { id: '1', name: 'Max the Bear' }
          ]
        }
      ]
    };

    return(
      <EmployeeBenefits employees={ data.employees } />
    );
  });