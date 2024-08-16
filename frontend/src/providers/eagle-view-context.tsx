import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the Trailer type
interface Trailer {
  id: string;
  name: string;
  filled: boolean;
}

// Define the context type
interface TrailerContextType {
  trailers: Trailer[];
  setTrailers: React.Dispatch<React.SetStateAction<Trailer[]>>;
}

// Create the context
const TrailerContext = createContext<TrailerContextType | undefined>(undefined);

// Create a provider component
export const TrailerProvider = ({ children }: { children: ReactNode }) => {
  const [trailers, setTrailers] = useState<Trailer[]>([
    {id :"123" , name : "harsha" , filled : true},
    {id :"124" , name : "harsha" , filled : true},
    {id :"125" , name : "harsha" , filled : true},
    {id :"126" , name : "harsha" , filled : true},
  ]);

  return (
    <TrailerContext.Provider value={{ trailers, setTrailers }}>
      {children}
    </TrailerContext.Provider>
  );
};

// Custom hook to use the trailer context
export const useTrailerContext = () => {
  const context = useContext(TrailerContext);
  if (!context) {
    throw new Error("useTrailerContext must be used within a TrailerProvider");
  }
  return context;
};
