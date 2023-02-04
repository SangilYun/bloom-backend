export const createQueryBuilderMock = (modifications?: Record<string, jest.Mock<any, any>>) =>
  jest.fn(() => ({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    setParameter: jest.fn().mockReturnThis(),
    leftJoinAndSelect: jest.fn().mockReturnThis(),
    getOne: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    execute: jest.fn().mockReturnThis(),
    offset: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    returning: jest.fn().mockReturnThis(),
    getManyAndCount: jest.fn().mockReturnValueOnce({}),
    ...modifications,
  }));
