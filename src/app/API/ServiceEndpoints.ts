import { environment } from './../../environments/environment.prod';
export class ServiceEnpoints {
  public static readonly baseURL: string = environment.baseUrl;
  public static readonly mostViewedArticles: string = "/{days}.json?api-key=9OAvSjZ6zx5rMAqsxLKOAxXAlNiWzoMU";
}
