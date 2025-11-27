import { Injectable, NotFoundException } from '@nestjs/common';

export type MachineStatus = 'Running' | 'Idle' | 'Stopped';

export interface Machine {
  id: number;
  name: string;
  status: MachineStatus;
  temperature: number;
  energyConsumption: number;
  history: number[];
}

@Injectable()
export class MachinesService {
  private machines: Machine[] = [
    {
      id: 1,
      name: 'Lathe Machine',
      status: 'Running',
      temperature: 75,
      energyConsumption: 1200,
      history: [70, 72, 75, 73],
    },
    {
      id: 2,
      name: 'CNC Milling Machine',
      status: 'Idle',
      temperature: 65,
      energyConsumption: 800,
      history: [60, 62, 65, 63],
    },
    {
      id: 3,
      name: 'Injection Molding Machine',
      status: 'Stopped',
      temperature: 85,
      energyConsumption: 1500,
      history: [80, 82, 85, 84],
    },
  ];

  /** Get all machines */
  findAll(): Machine[] {
    return [...this.machines];
  }

  /** Get machine by id */
  findOne(id: number): Machine {
    const machine = this.machines.find((m) => m.id === id);
    if (!machine) {
      throw new NotFoundException(`Machine with id ${id} not found`);
    }
    return machine;
  }

  /** Update machine by id */
  update(id: number, data: Partial<Omit<Machine, 'id'>>): Machine {
    const machine = this.findOne(id);

    // Explicitly update each field to satisfy TypeScript and ESLint
    if (data.name !== undefined) {
      machine.name = data.name;
    }
    if (data.status !== undefined) {
      machine.status = data.status;
    }
    if (data.temperature !== undefined) {
      machine.temperature = data.temperature;
    }
    if (data.energyConsumption !== undefined) {
      machine.energyConsumption = data.energyConsumption;
    }
    if (data.history !== undefined) {
      machine.history = data.history;
    }

    return machine;
  }
}
