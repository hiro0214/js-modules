const baseSize = {
  pc: {
    container: 1000,
    padding: 20,
  },
  sp: {
    container: 335,
    padding: 20,
  },
};

export const containerSize = {
  pc: baseSize.pc.container + baseSize.pc.padding * 2,
  sp: baseSize.sp.container,
};

export const breakPoint = 768;
