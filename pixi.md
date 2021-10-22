##### 创建sprite(精灵)

创建的方法有三种

- 通过单个图像文件
- 通过 雪碧图
- 通过纹理贴图

###### 加载图像到纹理缓存

`PIXI.utils.TextureCache['图片路径']`

###### 使用纹理创建精灵

```javascript
let texture = PIXI.utils.TextureCache["images/anySpriteImage.png"];
let sprite = new PIXI.Sprite(texture);
```

使用 `loader` 加载器 和 `loader`的`resources`对象中的纹理来创建精灵

```java
let sprite = new PIXI.Sprite(
  PIXI.loader.resources["images/anyImage.png"].texture
);
```



