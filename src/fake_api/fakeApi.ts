export  function getAll<T>(data:T[]): T[] {
    return data;
  }
  
  interface Identifiable {
    id: string;
  }
  export  function getById<T extends Identifiable>(data: T[], id: string): T | undefined {
    const obj = data.find(obj => obj.id === id);
    return obj;
  }