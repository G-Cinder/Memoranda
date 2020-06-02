---
title: GUI组件接口
---

## GUI 组件

[IUIAnimation](#IUIAnimation)

[IUIAnimator](#IUIAnimator)

[IUIButton](#IUIButton)

[IUICanvasGroup](#IUICanvasGroup)

[IUIDragInside](#IUIDragInside)

[IUIDropdown](#IUIDropdown)

[IUIGameObject](#IUIGameObject)

[IUIIconEffect](#IUIIconEffect)

[IUIImage](#IUIImage)

[IUIInputField](#IUIInputField)

[IUIModelImage](#IUIModelImage)

[IUIPressButton](#IUIPressButton)

[IUIRawImage](#IUIRawImage)

[IUIScrollbar](#IUIScrollbar)

[IUIScrollSystem](#IUIScrollSystem)

[IUISlider](#IUISlider)

[IUISpriteSelector](#IUISpriteSelector)

[IUITabGroup](#IUITabGroup)

[IUIText](#IUIText)

[IUIToggle](#IUIToggle)

[IUIToggleGroup](#IUIToggleGroup)

------

### IUIAnimation

##### Play(animName, callback)
+ Description
    + 播放动画.
+ Params
    + animName `string` : 动画名称
    + callback `function` : 动画播放结束回调
+ Return
    + `void`
    
##### Stop(invokeCallBack)
+ Description
    + 停止动画.
+ Params
    + invokeCallBack `bool` : 停止动画后时候执行回调
+ Return
    + `void`

------

### IUIAnimator

##### GetFloat(nameOrId)
+ Description
    + 通过name或者id获取float型参数的值.
+ Params
    + nameOrId `string or int` : name or id
+ Return
    + `float`
      
##### SetFloat(nameOrId,value)
+ Description
    + 通过name或者id设置float型参数的值.
+ Params
    + nameOrId `string or int` : name or id
    + value `float` : float值
+ Return
    + `void`
      
##### GetBool(nameOrId)
+ Description
    + 通过name或者id获取bool型参数的值.
+ Params
    + nameOrId `string or int` : name or id
+ Return
    + `bool`
        
##### SetBool(nameOrId,value)
+ Description
    + 通过name或者id设置bool型数的值.
+ Params
    + nameOrId `string or int` : name or id
    + value `bool` : bool值
+ Return
    + `void`
        
##### GetInteger(nameOrId)
+ Description
    + 通过name或者id获取int型参数的值.
+ Params
    + nameOrId `string or int` : name or id
+ Return
    + `int`
       
##### SetInteger(nameOrId,value)
+ Description
    + 通过name或者id设置int参数的值.
+ Params
    + nameOrId `string or int` : name or id
    + value `bool` : int值
+ Return
    + `void`
      
##### SetTrigger(nameOrId)
+ Description
    + 通过name或者id激活动画触发器，使得动画控制器的状态机中的流程发生变化.
+ Params
    + nameOrId `string or int` : name or id
+ Return
    + `void`
          
##### ResetTrigger(nameOrId)
+ Description
    + 通过name或者id重置动画触发器.
+ Params
    + nameOrId `string or int` : name or id    
+ Return
    + `void`
          
------

### IUIButton

#### SetInteractable(state)
+ Description
    + 设置对象是否可以交互.
+ Params
    + state `bool`
+ Return
    + `void`
  
#### GetInteractable()
 + Description
    + 获得对象是否可以交互.
 + Params
    + `void`
 + Return
    + `bool` 
   
#### OnClick()
 + Description
    + 监听Button的单击事件.单击按钮时触发回调.
    + 回调无返回值,function() end.
 + Params
    + fun `function`
 + Return
    + `void` 
    
#### RemoveAllClick() 
+ Description
    + 清除Button所有单击事件的监听.
+ Params     
    + `void`  
+ Return     
    + `void`  
    
#### GetTextValue() 
+ Description
    + 获取button子控件中名字为`Text`的文本控件的文本内容.
+ Params     
    + `void`  
+ Return     
    + `string`
    
#### SetTextValue(txt) 
+ Description
    + 设置button子控件中名字为`Text`的文本控件的文本内容.
+ Params     
    + txt `string`  
+ Return     
    + `void`    
    
#### GetTextColor() 
+ Description
    + 获得button子控件中名字为`Text`的文本控件的颜色.
+ Params     
    + `void`  
+ Return     
    + `Color` 
    
#### SetTextColor(color) 
+ Description
    + 设置button子控件中名字为`Text`的文本控件的颜色.
+ Params     
    + color `Color`  
+ Return     
    + `void` 
   
#### GetSprite(sprite) 
+ Description
    + 获取image Component的sprite.
+ Params     
    + `void`  
+ Return     
    + `Sprite` 
    
#### SetSprite(sprite) 
+ Description
    + 设置image Component的sprite.
+ Params     
    + sprite `Sprite`  
+ Return     
    + `void` 
    
#### GetImgColor() 
+ Description
    + 获取image Component的颜色.
+ Params     
    + `void`  
+ Return     
    + `Color` 
    
#### SetImgColor(color) 
+ Description
    + 获取image Component的颜色.
+ Params     
    + color `Color`  
+ Return     
    + `void` 
    
#### SetImgColorAlpha(alpha) 
+ Description
    + 获取image Component的透明度.
+ Params     
    + alpha `float`  
+ Return     
    + `void` 
    
------
    

### IUICanvasGroup

#### SetGroupAlpha(alpha)
+ Description
    + 设置组内元素的透明度.
+ Params
    + alpha `float`
+ Return
    + `void`
    
#### GetGroupAlpha()
+ Description
    + 获取组设置的透明度.
+ Params
    + `void`
+ Return
    + `float`
  
#### SetInteractable(interactable)
+ Description
  + 设置组内元素是否可交互.
+ Params
  + interactable `bool`
+ Return
  + `void`
  
#### GetInteractable()
+ Description
    + 获取是否允许组内元素可交互.
+ Params
    + `void`
+ Return
    + `bool`
    
#### SetBlocksRaycasts(blocksRaycasts)
+ Description
    + 设置组内元素的允许射线投射.
+ Params
    + blocksRaycasts `bool`
+ Return
    + `void`
    
#### GetBlocksRaycasts()
+ Description
    + 获取是否允许组内元素被射线投射.
+ Params
    + `void`
+ Return
    + `bool`
       
#### SetIgnoreParentGroups(ignoreParentGroups)
+ Description
    + 如果设置为真,则该组将忽略任何父组的设置.
+ Params
    + ignoreParentGroups `bool`
+ Return
    + `void`
    
#### GetIgnoreParentGroups()
+ Description
    + 获取当前ignoreParentGroups值.
+ Params
    + `void`
+ Return
    + `bool`
    
    
------

### IUIDragInside

#### AddEndDragEvent(func)
+ Description
    + 监听拖拽结束事件.
    + 拖拽结束调用回调并返回PointerEventData数据,function(data) end.
+ Params
    + func `function`
+ Return
    + `void`
    
------

### IUIDropdown

#### GetValue()
+ Description
    + 获取当前选中选项的下标.
+ Params
    + `void`
+ Return
    + `int`
    
#### SetValue(value)
+ Description
    + 设置选中选项.
+ Params
    + value `int`
+ Return
    + `void`
    
#### ClearOptions()
+ Description
    + 删除选项列表.
+ Params
    + value `int`
+ Return
    + `void`
    
#### AddOptions(args)
+ Description
    + 根据字符串列表将多个纯文本选项添加到下拉菜单的选项中.
+ Params
    + args `string[]`
+ Return
    + `void`
    
#### AddDropDownValueChanged(callFunc)
+ Description
    + 监听选项改变事件，在选项更改后执行回调.
    + 回调返回选项index,function(index) end.
+ Params
    + callFunc `function`
+ Return
    + `void`
    
#### AddDropDownOptionDatas(names,sprites)
+ Description
    + 根据字符串列表和Sprite列表将选项添加到下拉菜单的选项中.
+ Params
    + names `string[]`
    + sprites `Sprite[]`
+ Return
    + `void`
    
#### SetDropDownOption(selectid,data)
+ Description
    + 根据selectid设置选项数据.
+ Params
    + selectid `int`
    + data `table` :  {text(type:string),image(type:Sprite)}
+ Return
    + `void`
    
#### GetDropDownOptionText(selectid)
+ Description
    + 返回下标是selectid的选项文本数据.
+ Params
    + selectid `int`
+ Return
    + `string`
        
------

### IUIGameObject

#### AddClickEvent(func)
+ Description
    + 监听点击事件,单击这个gameObject后执行回调.
    + 回调返回点击的gameObject对象,function(gameObject) end.
+ Params
    + func `function`
+ Return
    + `void`
    
#### RemoveClickEvent()
+ Description
    + 移除该对象的点击事件的监听.
+ Params
    + `void`
+ Return
    + `void`
    
------

### IUIIconEffect

#### SetEffect(type)
+ Description
    + 设置当前控件效果,type值是在UISetting里IconEffectDataList的配置.
    + 返回值表示当前操作是否成功.
+ Params
    + type `string`
+ Return
    + `bool`
   
#### SetSprite(sprite)
+ Description
    + 设置图片.
+ Params
    + sprite `Sprite`
+ Return
    + `void`
    
------

### IUIImage

#### GetColor()
+ Description
    + 获取当前组件颜色.
+ Params
    + `void`
+ Return
    + `Color`
    
#### SetColor(color)
+ Description
    + 设置颜色.
+ Params
    + color `Color`
+ Return
    + `void`
    
#### SetColorAlpha(alpha)
+ Description
    + 设置透明度.
+ Params
    + alpha `float`
+ Return
    + `void`
    
#### GetSprite()
+ Description
    + 获得当前Sprite.
+ Params
    + `void`
+ Return
    + `Sprite`
 
#### GetOriginSprite()
+ Description
    + 获得编辑时赋值的Sprite.
+ Params
    + `void`
+ Return
    + `Sprite`
    
#### SetSprite(sprite)
+ Description
    + 设置Sprite.
+ Params
    + sprite `Sprite`
+ Return
    + `void`
    
#### SetMaterial(material)
+ Description
    + 设置材质.
+ Params
    + material `Material`
+ Return
    + `void`
    
#### GetMaterial()
+ Description
    + 返回当前材质.
+ Params
    + `void`
+ Return
    + `Material`
    
#### GetRaycastTargetState()
+ Description
    + 返回当前是否可以被射线投射.
+ Params
    + `void`
+ Return
    + `bool`
    
#### SetRaycastTargetState(raycastTarget)
+ Description
    + 设置控件是否可以被射线投射.
+ Params
    + raycastTarget `bool`
+ Return
    + `void`
    
#### SetFillAmount(amount)
+ Description
    + 设置image显示的百分比,需要ImageType为Filled.
+ Params
    + amount `float`
+ Return
    + `void`
    
#### GetFillAmount()
+ Description
    + 获取当前image显示的百分比,需要ImageType为Filled.
+ Params
    + `void`
+ Return
    + `float`
    
#### DoFillAmountAnimation(from,to,duration)
+ Description
    + 播放填充图片显示百分比动画.
    + 平滑的从from到to的动画持续时间为duration.
    + from、to的取值范围是0~1.
+ Params
    + from `float`
    + to `float`
    + duration `float`
+ Return
    + `void`
    
#### StopFillAmountAnimation()
+ Description
    + 停止当前填充图片显示百分比动画.
+ Params
    + `void`
+ Return
    + `void`
    
#### SetNativeSize()
+ Description
    + 调整图像大小,大小取决于当前图片资源大小.
+ Params
    + `void`
+ Return
    + `void`
    
------

### IUIInputField

#### GetValue()
+ Description
    + 获取当前输入框的文本内容.
+ Params
    + `void`
+ Return
    + `string`
    
#### SetValue(value)
+ Description
    + 设置输入框的文本内容.
+ Params
    + value `string`
+ Return
    + `void`
    
#### MoveTextEnd()
+ Description
    + 函数执行后延迟0.01秒移动光标到文本末尾.
+ Params
    + `void`
+ Return
    + `void`
    
#### MoveTextPosition(caretPos)
+ Description
    + 函数执行后延迟0.01秒移动光标到指定位置.
+ Params
    + caretPos `int`
+ Return
    + `void`
    
#### GetCaretPosition()
+ Description
    + 获得光标当前位置.
+ Params
    + `void`
+ Return
    + `int`
    
#### SetCaretPosition(pos)
+ Description
    + 设置光标位置.
+ Params
    + pos `int`
+ Return
    + `void`
    
#### SetPlaceHolderText(value)
+ Description
    + 设置输入提示文本内容.
+ Params
    + value `string`
+ Return
    + `void`
    
#### GetPlaceHolderText()
+ Description
    + 获得输入提示文本内容.
+ Params
    + `void`
+ Return
    + `string`
    
#### AddEndEditEvent(func)
+ Description
    + 添加输入结束事件.
    + 事件回调返回当前输入框文本内容.
+ Params
    + func `function`
+ Return
    + `void`
#### RemoveEndEditEvent()
+ Description
    + 清除添加的输入结束事件.
+ Params
    + `void`
+ Return
    + `void`
    
#### OnInputValueChanged(func)
+ Description
    + 添加输入内容变化事件.
    + 事件回调返回当前输入框文本内容.
+ Params
    + func `function`
+ Return
    + `void`
    
#### RemoveAllInputValueChanged()
+ Description
    + 清除输入内容变化事件的注册.
+ Params
    + `void`
+ Return
    + `void`
    
#### ClearInputFieldEvent()
+ Description
    + 清除该控件监听的输入结束事件及输入内容变化事件.
+ Params
    + `void`
+ Return
    + `void`
    
#### ActiveInputField(active)
+ Description
    + active为true,激活该控件,可以处理事件.
    + active为false,使控件实现,将不处理任何事件.
+ Params
    + active `bool`
+ Return
    + `void`
    
#### SetReadOnly(readonly)
+ Description
    + 设置只读只允许文本的高亮显示，而不允许通过键盘进行修改.
+ Params
    + readonly `bool`
+ Return
    + `void`
    
------

 

### IUIModelImage

#### SetModel(modelView,parentName)
+ Description
    + 设置3D模型在ui上显示.
    + modelView是需要显示的模型实例,parentName可以为空,如果不为空将会去ModelSceneRoot下去查找这个名字的gameObject.
    + 如果parentName的gameObject存在将作为modelView的父级,否则ModelSceneRoot将作为modelView的父级.
+ Params
    + modelView `GameObject`
    + parentName `string`
+ Return
    + `void`
    
------

### IUIPressButton

#### OnPointerDown(fun)
+ Description
    + 监听button的按下事件.
    + 按下时执行回调，回调返回PointerEventData数据.
+ Params
    + fun `function`
+ Return
    + `void`
    
#### OnPointerUp(fun)
+ Description
    + 监听button的抬起事件.
    + 抬起时执行回调，回调返回PointerEventData数据.
+ Params
    + fun `function`
+ Return
    + `void`
    
------

### IUIRawImage

#### GetColor()
+ Description
    + 获取当前颜色数据.
+ Params
    + `void`
+ Return
    + `Color`
    
#### SetColor(color)
+ Description
    + 设置颜色.
+ Params
    + color `Color`
+ Return
    + `void`
    
#### GetTexture()
+ Description
    + 获取当前Texture数据.
+ Params
    + `void`
+ Return
    + `Texture`
    
#### SetTexture(texture)
+ Description
    + 设置贴图.
+ Params
    + texture `Texture`
+ Return
    + `void`
    
#### GetMaterial()
+ Description
    + 获取当前材质.
+ Params
    + `void`
+ Return
    + `Material`
    
#### SetMaterial(material)
+ Description
    + 设置材质.
+ Params
    + material `Material`
+ Return
    + `void`
    
------

### IUIScrollbar

#### SetValue(value)
+ Description
    + 设置滚动条的滑动百分比值,取值范围0~1.
+ Params
    + value `float`
+ Return
    + `void`
    
#### SetSize(value)
+ Description
    + 设置滚动条滑块的大小,取值范围0~1(其中1表示填充整个滚动条).
+ Params
    + value `float`
+ Return
    + `void`
  
#### GetSize(value)
+ Description
    + 获取滚动条滑块的大小.
+ Params
    + `void`
+ Return
    + `float`
    
------
    
    

### IUIScrollSystem

#### Add(name, data)
+ Description
    + 添加一个目标为name的item和数据,返回一个唯一id.
    + 这个返回的id将作为后面能直接查询和操作这个item或data的唯一办法.
    + 如果目标name在这个组件下,则直接克隆它,否则将会尝试加载外部prefab.
+ Params
    + name `string`
    + data `table`
+ Return
    + `int`
    
#### Insert(handle,prefabName,data)
+ Description
    + 将一个item插入在handle(id)之前.
    + 返回新item的id.
+ Params
    + handle `int`
    + prefabName `string`
    + data `table`
+ Return
    + `int`
    
#### Set(handle,data)
+ Description
    + 更新handle对应的item的数据.
    + data如果为空那仅仅是刷新,如果有值将覆盖源数据.
+ Params
    + handle `int`
    + data `table`
+ Return
    + `void`
    
#### Get(handle)
+ Description
    + 获取id对应的数据.
+ Params
    + handle `int`
+ Return
    + `table`
    
#### Remove(handle)
+ Description
    + 删除.
    + 返回值表示操作是否成功.
+ Params
    + handle `int`
+ Return
    + `bool`
    
#### Clear()
+ Description
    + 清除ScrollSystem所有数据.
+ Params
    + `void`
+ Return
    + `void`
    
#### ScrollTo(handle,bUseAnim)
+ Description
    + 滚动到对应的item上.
    + 可以选择滚动过程是否使用动画.
+ Params
    + handle `int`
    + bUseAnim `bool`
+ Return
    + `void`
    
#### ScrollToBegin(bUseAnim)
+ Description
    + 滚动到开始.
    + 可以选择滚动过程是否使用动画.
+ Params
    + bUseAnim `bool`
+ Return
    + `void`
        
#### ScrollToEnd(bUseAnim)
+ Description
    + 滚动到末尾.
    + 可以选择滚动过程是否使用动画.
+ Params
    + bUseAnim `bool`
+ Return
    + `void`
    
#### OnBeginDrag(func)
+ Description
    + 监听拖动开始事件.
    + 拖动开始是执行回调，返回PointerEventData数据.
+ Params
    + func `function`
+ Return
    + `void`
    
#### OnDrag(func)
+ Description
    + 监听拖动中事件.
    + 拖动开始是执行回调，返回PointerEventData数据.
+ Params
    + func `function`
+ Return
    + `void`
    
#### OnEndDrag(func)
+ Description
    + 监听拖动结束事件.
    + 拖动开始是执行回调，返回PointerEventData数据.
+ Params
    + func `function`
+ Return
    + `void`
    
#### SetScrollDirection(isHorOrVer)
+ Description
    + 设置滚动反向.
    + true为水平方向，false为垂直方向.
+ Params
    + isHorOrVer `bool`
+ Return
    + `void`
    
------

### IUISlider

#### SetValue(value)
+ Description
    + 设置进度条的值.
+ Params
    + value `float`
+ Return
    + `void`
   
#### GetValue()
+ Description
    + 获得进度条当前的值.
+ Params
    + `void`
+ Return
    + `float`
    
#### SetMaxValue(value)
+ Description
    + 设置进度条最大值.
+ Params
    + value `float`
+ Return
    + `void`
    
#### SetMinValue(value)
+ Description
    + 设置进度条最小值.
+ Params
    + value `float`
+ Return
    + `void`
    
#### OnValueChanged(fun)
+ Description
    + 监听进度条进度变化事件.
    + 回调返回进度条当前值.
+ Params
    + fun `function`
+ Return
    + `void`
    
#### RemoveSliderListener()
+ Description
    + 清除进度条进度变化事件监听.
+ Params
    + `void`
+ Return
    + `void`
    
#### SetInteractable(state)
+ Description
    + 设置组件时候可交互.
+ Params
    + state `bool`
+ Return
    + `void`
    
#### SetFillColor(color)
+ Description
    + 设置精度条填充图的颜色.
+ Params
    + color `Color`
+ Return
    + `void`
    
------

### IUISpriteSelector

#### SetSpriteByIndex(index)
+ Description
    + 设置需要显示的Sprite的index.
+ Params
    + index `int`
+ Return
    + `void`
    
#### SetSpriteByName(name)
+ Description
    + 设置需要显示的Sprite的name.
+ Params
    + name `string`
+ Return
    + `void`
    
------

### IUITabGroup

#### GetActiveIndex()
+ Description
    + 返回当前激活的tab下标.
+ Params
    + `void`
+ Return
    + `int`   
    
#### SetIndex(index, panelName)
+ Description
    + 注册下标对应的tab页UIPanel.
+ Params
    + index `int`
    + panelName `string`
+ Return
    + `void`  
    
#### SwitchTabOn(index)
+ Description
    + 选择激活index对应的tab页.
+ Params
    + index `int`
+ Return
    + `void` 
    
------

### IUIText

#### GetColor()
+ Description
    + 返回文本的颜色.
+ Params
    + `void`
+ Return
    + `Color`   
    
#### SetColor(color)
+ Description
    + 设置文本的颜色.
+ Params
    + color `Color`
+ Return
    + `void` 
    
#### SetColorAlpha(alpha)
+ Description
    + 设置文本的透明度.
+ Params
    + alpha `float`
+ Return
    + `void`
    
#### SetTextValue(info)
+ Description
    + 设置文本内容.
+ Params
    + info `string`
+ Return
    + `void`
    
#### GetTextValue(info)
+ Description
    + 获得当前文本内容.
+ Params
    + `void`
+ Return
    + `string`
    
#### GetRaycastTargetState()
+ Description
    + 获得当前组件是否能接受射线投射.
+ Params
    + `void`
+ Return
    + `bool`
    
#### SetRaycastTargetState(raycastTarget)
+ Description
    + 设置组件是否能接受射线投射.
+ Params
    + raycastTarget `bool`
+ Return
    + `void`
    
#### SetOutlineGraphicAlpha(useGraphicAlpha)
+ Description
    + 设置描边的透明度是否继承自文本组件的透明度.
+ Params
    + useGraphicAlpha `bool`
+ Return
    + `void`
    
#### GetOutlineGraphicAlpha()
+ Description
    + 返回描边透明度是否继承自文本组件.
+ Params
    + `void`
+ Return
    + `bool`
    
#### SetOutlineEffectColor(effectColor)
+ Description
    + 设置描边的效果颜色.
+ Params
    + effectColor `Color`
+ Return
    + `void`
    
#### GetOutlineEffectColor()
+ Description
    + 获得当前描边的效果颜色.
+ Params
    + `void`
+ Return
    + `Color`
    
#### GetOutlineEffectDistance()
+ Description
    + 获得当前描边的阴影长度.
+ Params
    + `void`
+ Return
    + `Vector2`
    
#### SetOutlineEffectDistance(effectDistance)
+ Description
    + 设置描边的阴影长度.
+ Params
    + effectDistance `Vector2`
+ Return
    + `void`
    
#### GetPreferredWidth()
+ Description
    + 获取分配给文本足够空间的宽度.
+ Params
    + `void`
+ Return
    + `float`
    
#### GetPreferredHeight()
+ Description
    + 获取分配给文本足够空间的高度.
+ Params
    + `void`
+ Return
    + `float`
    
#### SetFontStyle(style)
+ Description
    + 设置字体风格.
+ Params
    + style `FontStyle`
+ Return
    + `void`
    
#### GetFontStyle()
+ Description
    + 获取当前字体风格.
+ Params
    + `void`
+ Return
    + `FontStyle`
    
#### SetFontSize(size)
+ Description
    + 设置字体大小.
+ Params
    + size `uint`
+ Return
    + `void`
    
#### GetFontSize()
+ Description
    + 设置字体大小.
+ Params
    + `void`
+ Return
    + `uint`
    
#### SetMaterial(material)
+ Description
    + 设置材质.
+ Params
    + material `Material`
+ Return
    + `void`
    
------

### IUIToggle

#### GetTextValue()
+ Description
    + 返回子控件名字为Label的文本控件的文本内容.
+ Params
    + `void`
+ Return
    + `string` 
    
#### SetTextValue(txt)
+ Description
    + 设置子控件名字为Label的文本控件的文本内容.
+ Params
    + txt `string`
+ Return
    + `void` 
    
#### GetTextColor()
+ Description
    + 设置子控件名字为Label的文本控件的文本颜色.
+ Params
    + `void`
+ Return
    + `Color`
    
#### SetTextColor(color)
+ Description
    + 设置子控件名字为Label的文本控件的文本颜色.
+ Params
    + color `Color`
+ Return
    + `void` 
    
#### GetImageColor()
+ Description
    + 获取子控件名字为Image的Image控件的颜色.
+ Params
    + `void`
+ Return
    + `Color` 
    
#### SetImageColor(color)
+ Description
    + 设置子控件名字为Image的Image控件的颜色.
+ Params
    + color `Color`
+ Return
    + `void` 
    
#### SetToggleState(isOn)
+ Description
    + 设置组件的开关状态.
    + 如果在设置之前监听了开关状态切换事件,那设置之后该事件也会触发执行.
+ Params
    + isOn `bool`
+ Return
    + `void` 
    
#### GetToggleState()
+ Description
    + 获取组件的开关状态.
+ Params
    + `void`
+ Return
    + `bool` 
    
#### OnStateChanged(fun)
+ Description
    + 监听开关状态改变的事件.
    + 事件执行回调返回当前开关状态function(isOn) end.
+ Params
    + fun `function`
+ Return
    + `void` 
    
#### RemoveAllStateChanged()
+ Description
    + 清除开关状态改变的监听.
+ Params
    + `void`
+ Return
    + `void`
    
#### SetInteractable(state)
+ Description
    + 设置组件能否被交互.
+ Params
    + state `bool`
+ Return
    + `void`
    
#### GetInteractable()
+ Description
    + 获取组件能否被交互.
+ Params
    + `void`
+ Return
    + `bool`
    
------

### IUIToggleGroup

#### AddToggleEvent(callback)
+ Description
    + 监听组内Toggle开关状态切换事件.
    + 事件触发回调返回toggle的开关状态及toggle在组内的下标,function(isOn,idx) end.
+ Params
    + callback `function`
+ Return
    + `void` 
    
#### SetAllTogglesOff()
+ Description
    + 将组内所有toggle开关状态全置为false,且通知给每个toggle状态改变的消息.
+ Params
    + `void`
+ Return
    + `void` 
    
#### SwitchToggleIndex(index)
+ Description
    + 切换组内下标为index的toggle为选中状态.
+ Params
    + index `int`
+ Return
    + `void` 
    
#### SwitchAllowSwitchOff(isOn)
+ Description
    + isOn为true表示组内toggle可以全部是关闭状态.
    + isOn为false表示组内toggle至少有一个是选中状态.
+ Params
    + isOn `bool`
+ Return
    + `void` 
    
------
