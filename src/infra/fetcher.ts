const API = process.env.API;

export interface IApiTemplate<T> {
  data: T;
  metadata: {
    count: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    limit: number;
    page: number;
    pageCount: number;
  };
}


export async function fetcher<T>(url: string): Promise<IApiTemplate<T>> {
  const jsonResult = await fetch(`${API}${url}`, { method: "GET" });

  const response = await jsonResult.json();

  return response;
}
