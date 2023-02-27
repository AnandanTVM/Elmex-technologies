import React from 'react';
import { HomeNav } from '../../Components';
import EmployTable from '../../Components/HomeComponets/EmployTable/EmployTable';

export default function Home() {
  return (
    <div>
      <HomeNav home />
      <EmployTable/>
    </div>
  );
}
