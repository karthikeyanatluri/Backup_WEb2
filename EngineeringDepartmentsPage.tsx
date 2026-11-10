import React from 'react';
import { SchoolDepartmentsPage, type SchoolPageProps } from './components/SchoolDepartmentsPage';
import { schoolsConfigMap } from './data/schoolsData';

export const EngineeringDepartmentsPage: React.FC<SchoolPageProps> = (props) => {
  return <SchoolDepartmentsPage config={schoolsConfigMap.engineering} {...props} />;
};

export default EngineeringDepartmentsPage;
