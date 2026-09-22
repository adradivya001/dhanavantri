import React from 'react';
import Card from '../common/Card';

const DoctorCard = ({ doctor }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
        {doctor.image ? (
          <img 
            src={doctor.image} 
            alt={doctor.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--hospital-secondary)] bg-opacity-10 text-[var(--hospital-primary)]">
            <span className="text-4xl">👨‍⚕️</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow text-center items-center">
        <h3 className="text-lg font-bold text-[var(--hospital-heading)] mb-1">
          {doctor.name}
        </h3>
        <p className="text-[var(--hospital-primary)] font-medium text-sm mb-3">
          {doctor.specialization}
        </p>
        <p className="text-gray-600 text-sm mb-1">{doctor.qualification}</p>
        <p className="text-gray-500 text-xs mt-auto">Exp: {doctor.experience}</p>
      </div>
    </Card>
  );
};

export default DoctorCard;
