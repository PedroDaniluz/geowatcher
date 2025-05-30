import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'measures';

export type Measurement = {
  humidity: number;
  inclination: number;
  notes?: string;
  date: string;
  location: string;
};

export async function seedMeasurements() {
  const existing = await AsyncStorage.getItem(STORAGE_KEY);
  if (!existing) {
    const initialData: Measurement[] = [
      {
        humidity: 60,
        inclination: 18,
        notes: 'Primeira medição',
        date: new Date(Date.now() - 86400000).toISOString(), // 1 dia atrás
        location: 'Aclimação, São Paulo - SP',
      },
      {
        humidity: 55,
        inclination: 21,
        notes: 'Segunda medição',
        date: new Date().toISOString(),
        location: 'Aclimação, São Paulo - SP',
      },
    ];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  }
}

export async function saveMeasurement(measurement: Measurement) {
  const prev = await AsyncStorage.getItem(STORAGE_KEY);
  const measures = prev ? JSON.parse(prev) : [];
  measures.push(measurement);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(measures));
}

export async function getMeasurements(): Promise<Measurement[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export async function clearMeasurements() {
  await AsyncStorage.removeItem(STORAGE_KEY);
}