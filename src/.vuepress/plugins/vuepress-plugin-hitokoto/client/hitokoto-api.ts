import axios, { AxiosResponse } from "axios";

export interface Hitokoto {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: null;
  creator: string;
  creator_uid: number;
  reviewer: number;
  commit_from: string;
  created_at: string;
  length: number;
}

// 默认一言数据，用于 API 失败时的回退
const defaultHitokoto: Hitokoto = {
  id: 0,
  uuid: "default",
  hitokoto: "人生若只如初见，何事秋风悲画扇。",
  type: "i",
  from: "木兰花令·拟古决绝词",
  from_who: null,
  creator: "default",
  creator_uid: 0,
  reviewer: 0,
  commit_from: "default",
  created_at: "",
  length: 14,
};

// Converts JSON strings to/from your types
export class HitokotoApi {
  public static toHitokoto(json: string): Hitokoto {
    return JSON.parse(json);
  }

  public static HitokotoToJson(value: Hitokoto): string {
    return JSON.stringify(value);
  }
  public static async request(): Promise<AxiosResponse<Hitokoto>> {
    try {
      return await axios.get<Hitokoto>("https://v1.hitokoto.cn/", {
        timeout: 5000,
      });
    } catch (error) {
      // API 失败时返回默认数据
      console.warn("Hitokoto API request failed, using default data");
      return {
        data: defaultHitokoto,
        status: 200,
        statusText: "OK",
        headers: {},
        config: {} as any,
      };
    }
  }
}
