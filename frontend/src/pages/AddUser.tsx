
// import { useForm } from 'react-hook-form';
// import { useAuth } from '../context/AuthContext';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FormImage from '../assets/image1.jpeg';

// interface UserFormData {
//   managerID: string;
//   supervisorID: string;
//   workerID: string;
//   departmentID: string;
//   email: string;
//   password: string;
//   name: string;
//   timeOfArrival: string;
// }

// const AddUser: React.FC = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm<UserFormData>({
//     defaultValues: {
//       managerID: '',
//       supervisorID: '',
//       workerID: '',
//       departmentID: '',
//       email: '',
//       password: '',
//       name: '',
//       timeOfArrival: '',
//     }
//   });
//   const { addUser } = useAuth();
//   const navigate = useNavigate();

//   const onSubmit = async (data: UserFormData) => {
//     try {
//       await addUser(data); // Ensure addUser accepts the updated UserFormData
//       toast.success("User details updated successfully!");
//       reset();
//       setTimeout(() => {
//         navigate('/');
//       }, 2000);
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         toast.error(`Add user details failed: ${error.message}`);
//       } else {
//         toast.error('Add user details failed: An unexpected error occurred');
//       }
//     }
//   };

//   return (
//     <div className="w-full flex justify-center mt-20 p-2 space-x-4">
//       <Card className="w-[950px]">
//         <CardHeader>
//           <CardTitle className="text-2xl text-foreground flex">Add New User</CardTitle>
//         </CardHeader>
//         <CardContent className="flex w-full gap-16 p-12 mt-10">
//           <div className="w-1/2">
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="grid w-full items-center gap-4">
//                 {/* Form fields as previously updated */}
//                 {/* Example for Manager ID */}
//                 <div className="flex flex-col space-y-1.5">
//                   <Label htmlFor="managerID">Manager ID</Label>
//                   <Input
//                     id="managerID"
//                     placeholder="Enter Manager ID"
//                     {...register('managerID', { required: 'Manager ID is required' })}
//                   />
//                   {errors.managerID && (
//                     <p className="text-red-500">{errors.managerID.message}</p>
//                   )}
//                 </div>
//                 {/* Repeat for other fields */}
//               </div>
//               <Button type="submit" className="w-full mt-10 hover:bg-blue-900">Add User</Button>
//             </form>
//           </div>
//           <div className="w-1/2 flex justify-center p-2">
//             <img src={FormImage} alt="Add User" />
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default AddUser;
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImage from '../assets/image1.jpeg';

interface UserFormData {
  managerID?: string;
  supervisorID?: string;
  workerID?: string;
  departmentID: string;
  email: string;
  password: string;
  name: string;
  timeOfArrival: string;
}

const AddUser: React.FC = () => {
  const [userType, setUserType] = useState<'manager' | 'supervisor'>('manager');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<UserFormData>({
    defaultValues: {
      managerID: '',
      supervisorID: '',
      workerID: '',
      departmentID: '',
      email: '',
      password: '',
      name: '',
      timeOfArrival: '',
    }
  });
  const { addUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: UserFormData) => {
    try {
      await addUser(data); // Ensure addUser accepts the updated UserFormData
      toast.success("User details updated successfully!");
      reset();
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Add user details failed: ${error.message}`);
      } else {
        toast.error('Add user details failed: An unexpected error occurred');
      }
    }
  };

  return (
    <div className="w-full flex justify-center mt-20 p-2 space-x-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-4xl text-foreground flex justify-center" style={{ fontFamily: 'Lobster, cursive' }}>Add New User</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row w-full gap-8 p-8">
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
                  <span style={{ fontFamily: 'Poiret One, sans-serif' }}>Are you</span>
                  <Label htmlFor="manager" className="flex items-center space-x-2">
                    <input
                      id="manager"
                      type="radio"
                      value="manager"
                      checked={userType === 'manager'}
                      onChange={() => setUserType('manager')}
                      className="form-radio"
                    />
                    <span>Manager</span>
                  </Label>
                  <Label htmlFor="supervisor" className="flex items-center space-x-2">
                    <input
                      id="supervisor"
                      type="radio"
                      value="supervisor"
                      checked={userType === 'supervisor'}
                      onChange={() => setUserType('supervisor')}
                      className="form-radio"
                    />
                    <span>Supervisor</span>
                  </Label>
                </div>

                {userType === 'manager' && (
                  <>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="managerID">Manager ID</Label>
                      <Input
                        id="managerID"
                        placeholder="Enter Manager ID"
                        {...register('managerID', { required: 'Manager ID is required' })}
                      />
                      {errors.managerID && (
                        <p className="text-red-500">{errors.managerID.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        {...register('password', { required: 'Password is required' })}
                      />
                      {errors.password && (
                        <p className="text-red-500">{errors.password.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="supervisorID">Supervisor ID</Label>
                      <Input
                        id="supervisorID"
                        placeholder="Enter Supervisor ID"
                        {...register('supervisorID', { required: 'Supervisor ID is required' })}
                      />
                      {errors.supervisorID && (
                        <p className="text-red-500">{errors.supervisorID.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="departmentID">Department ID</Label>
                      <Input
                        id="departmentID"
                        placeholder="Enter Department ID"
                        {...register('departmentID', { required: 'Department ID is required' })}
                      />
                      {errors.departmentID && (
                        <p className="text-red-500">{errors.departmentID.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email of the Supervisor</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter Supervisor's Email"
                        {...register('email', { required: 'Email is required' })}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name of the Supervisor</Label>
                      <Input
                        id="name"
                        placeholder="Enter Supervisor's Name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="timeOfArrival">Slot/Time of Arrival</Label>
                      <Input
                        id="timeOfArrival"
                        placeholder="Enter Time of Arrival"
                        {...register('timeOfArrival', { required: 'Time of Arrival is required' })}
                      />
                      {errors.timeOfArrival && (
                        <p className="text-red-500">{errors.timeOfArrival.message}</p>
                      )}
                    </div>
                  </>
                )}

                {userType === 'supervisor' && (
                  <>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="supervisorID">Supervisor ID</Label>
                      <Input
                        id="supervisorID"
                        placeholder="Enter Supervisor ID"
                        {...register('supervisorID', { required: 'Supervisor ID is required' })}
                      />
                      {errors.supervisorID && (
                        <p className="text-red-500">{errors.supervisorID.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter Password"
                        {...register('password', { required: 'Password is required' })}
                      />
                      {errors.password && (
                        <p className="text-red-500">{errors.password.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="workerID">Worker ID</Label>
                      <Input
                        id="workerID"
                        placeholder="Enter Worker ID"
                        {...register('workerID', { required: 'Worker ID is required' })}
                      />
                      {errors.workerID && (
                        <p className="text-red-500">{errors.workerID.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="departmentID">Department ID</Label>
                      <Input
                        id="departmentID"
                        placeholder="Enter Department ID"
                        {...register('departmentID', { required: 'Department ID is required' })}
                      />
                      {errors.departmentID && (
                        <p className="text-red-500">{errors.departmentID.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email of the Worker</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter Worker's Email"
                        {...register('email', { required: 'Email is required' })}
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name of the Worker</Label>
                      <Input
                        id="name"
                        placeholder="Enter Worker's Name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="timeOfArrival">Slot/Time of Arrival</Label>
                      <Input
                        id="timeOfArrival"
                        placeholder="Enter Time of Arrival"
                        {...register('timeOfArrival', { required: 'Time of Arrival is required' })}
                      />
                      {errors.timeOfArrival && (
                        <p className="text-red-500">{errors.timeOfArrival.message}</p>
                      )}
                    </div>
                  </>
                )}
              </div>
              <Button type="submit" className="w-full mt-10 hover:bg-blue-900">Add User</Button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center p-2">
            <img src={FormImage} alt="Add User" className="object-cover w-full max-w-sm" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddUser;
