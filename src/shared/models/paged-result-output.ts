/** 分页输出结果 */
export interface PagedResultOutput<T> {
  /** 总数 */
  totalCount: number;
  /** 数据集合 */
  items: T[];
}
