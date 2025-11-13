import autofit from 'autofit.js';

/**
 * 初始化自适应屏幕
 * @param designWidth 设计稿宽度，默认 1920
 * @param designHeight 设计稿高度，默认 1080
 */
export const initAutofit = (designWidth = 1920, designHeight = 1080) => {
  autofit.init({
    dw: designWidth,
    dh: designHeight,
    el: '#root',
    resize: true,
  });
};

/**
 * 销毁自适应
 */
export const destroyAutofit = () => {
  if (autofit && typeof autofit.off === 'function') {
    autofit.off();
  }
};

