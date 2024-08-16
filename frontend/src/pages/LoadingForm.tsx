import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImage from '../assets/image1.jpeg';

interface Driver {
  id: string;
  name: string;
}

const driverOptions: Driver[] = [
    { id: '1', name: 'Amit Sharma' },
    { id: '2', name: 'Ravi Kumar' },
    { id: '3', name: 'Rajesh Singh' },
    { id: '4', name: 'Vikram Verma' },
    { id: '5', name: 'Kumar Nair' },
    { id: '6', name: 'Arun Patel' },
    { id: '7', name: 'Rakesh Joshi' },
    { id: '8', name: 'Sandeep Gupta' },
    { id: '9', name: 'Manoj Reddy' },
    { id: '10', name: 'Deepak Desai' }
];

interface Warehouse {
  location: string;
  id: string;
}

const warehouseOptions: Warehouse[] = [
  { location: 'Warehouse A', id: '1101' },
  { location: 'Warehouse B', id: '1102' },
  { location: 'Warehouse C', id: '1103' },
  { location: 'Warehouse D', id: '1104' },
  { location: 'Warehouse E', id: '1105' }
];

interface LoadingFormData {
  date: string;
  time: string;
  vehicleNumber: string;
  driverName: string;
  driverID: string;
  quantity: number;
  warehouseLocation: string;
  warehouseID: string;
}

const LoadingForm: React.FC = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<LoadingFormData>({
    defaultValues: {
      date: '',
      time: '',
      vehicleNumber: '',
      driverName: '',
      driverID: '',
      itemDescription: '',
      quantity: 0,
      warehouseLocation: '',
      warehouseID: ''
    }
  });

  const [driverID, setDriverID] = useState('');
  const [warehouseID, setWarehouseID] = useState('');
  const navigate = useNavigate();
  
  const driverName = watch('driverName');
  const warehouseLocation = watch('warehouseLocation');

  React.useEffect(() => {
    const selectedDriver = driverOptions.find(driver => driver.name === driverName);
    if (selectedDriver) {
      setDriverID(selectedDriver.id);
      setValue('driverID', selectedDriver.id);
    } else {
      setDriverID('');
      setValue('driverID', '');
    }
  }, [driverName, setValue]);

  React.useEffect(() => {
    const selectedWarehouse = warehouseOptions.find(warehouse => warehouse.location === warehouseLocation);
    if (selectedWarehouse) {
      setWarehouseID(selectedWarehouse.id);
      setValue('warehouseID', selectedWarehouse.id);
    } else {
      setWarehouseID('');
      setValue('warehouseID', '');
    }
  }, [warehouseLocation, setValue]);

  const onSubmit = async (data: LoadingFormData) => {
    toast.success("Form submitted successfully!");
    // try {
    //   toast.success("Form submitted successfully!");
    //   navigate('/');
    // } catch (error) {
    //   toast.error("Form submission failed. Please try again.");
    // }
  };

  return (
    <div className="w-full flex justify-center mt-20 p-2 space-x-4">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-4xl text-foreground flex justify-center" style={{ fontFamily: 'Lobster, cursive' }}>
            Loading Form
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col lg:flex-row w-full gap-8 p-8">
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  {...register('date', { required: 'Date is required' })}
                />
                {errors.date && <p className="text-red-500">{errors.date.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  {...register('time', { required: 'Time is required' })}
                />
                {errors.time && <p className="text-red-500">{errors.time.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                <Input
                  id="vehicleNumber"
                  placeholder="Enter Vehicle Number"
                  {...register('vehicleNumber', { required: 'Vehicle Number is required' })}
                />
                {errors.vehicleNumber && <p className="text-red-500">{errors.vehicleNumber.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="driverName">Driver Name</Label>
                <select
                  id="driverName"
                  {...register('driverName', { required: 'Driver Name is required' })}
                  className="form-select"
                >
                  <option value="">Select Driver</option>
                  {driverOptions.map(driver => (
                    <option key={driver.id} value={driver.name}>
                      {driver.name}
                    </option>
                  ))}
                </select>
                {errors.driverName && <p className="text-red-500">{errors.driverName.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="driverID">Driver ID</Label>
                <Input
                  id="driverID"
                  value={driverID}
                  readOnly
                />
                {errors.driverID && <p className="text-red-500">{errors.driverID.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="itemDescription">Item Description</Label>
                <Input
                  id="itemDescription"
                  placeholder="Enter Item Description"
                  {...register('itemDescription', { required: 'Item Description is required' })}
                />
                {errors.itemDescription && <p className="text-red-500">{errors.itemDescription.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  placeholder="Enter Quantity"
                  min="0"
                  {...register('quantity', { required: 'Quantity is required', min: { value: 0, message: 'Quantity cannot be negative' } })}
                />
                {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="warehouseLocation">Warehouse Location</Label>
                <select
                  id="warehouseLocation"
                  {...register('warehouseLocation', { required: 'Warehouse Location is required' })}
                  className="form-select"
                >
                  <option value="">Select Location</option>
                  {warehouseOptions.map(warehouse => (
                    <option key={warehouse.id} value={warehouse.location}>
                      {warehouse.location}
                    </option>
                  ))}
                </select>
                {errors.warehouseLocation && <p className="text-red-500">{errors.warehouseLocation.message}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="warehouseID">Warehouse ID</Label>
                <Input
                  id="warehouseID"
                  value={warehouseID}
                  readOnly
                />
                {errors.warehouseID && <p className="text-red-500">{errors.warehouseID.message}</p>}
              </div>

              <Button type="submit" className="w-full mt-10 hover:bg-blue-900">Submit</Button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center p-2">
            <img src={FormImage} alt="Loading Form" className="object-cover w-full max-w-sm" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingForm;

