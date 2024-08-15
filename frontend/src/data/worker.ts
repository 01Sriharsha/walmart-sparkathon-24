export interface Worker {
  id: string;
  name: string;
  tasksCompleted: number;
  performance: string;
}

const workers: Worker[] = [
  { id: 'W001', name: 'Tom Harris', tasksCompleted: 25, performance: 'Good' },
  { id: 'W002', name: 'Emily Clark', tasksCompleted: 30, performance: 'Excellent' },
  { id: 'W003', name: 'Nathan Green', tasksCompleted: 20, performance: 'Average' },
  { id: 'W004', name: 'Olivia Martinez', tasksCompleted: 22, performance: 'Good' },
  { id: 'W005', name: 'Liam Lewis', tasksCompleted: 27, performance: 'Excellent' },
  { id: 'W006', name: 'Sophia Turner', tasksCompleted: 19, performance: 'Average' },
  { id: 'W007', name: 'Benjamin Walker', tasksCompleted: 23, performance: 'Good' },
  { id: 'W008', name: 'Ava Wilson', tasksCompleted: 28, performance: 'Excellent' },
  { id: 'W009', name: 'James White', tasksCompleted: 21, performance: 'Average' },
  { id: 'W010', name: 'Isabella Allen', tasksCompleted: 26, performance: 'Good' },
];

export default workers;
