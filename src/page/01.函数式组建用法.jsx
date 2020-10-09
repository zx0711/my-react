;<Form className="three-distribute">
  {showData.map((item, index) => {
    return (
      <Form.Item {...formItemLayout} label={item.label} required key={index}>
        {item.content}
      </Form.Item>
    )
  })}
</Form>

// 上面这种就是箭头函数，就是我平常常常用到的，叫函数作为子组建或者是函数式组建
