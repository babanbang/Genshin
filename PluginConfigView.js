export default [{
  name: 'Genshin 面板配置',
  file: 'Genshin-profile.yaml',
  priority: 100,
  view: [
    {
      key: '面板服务选择：0:自动，1Mgg, 2Hutao，3Enka',
      comment: '如设置三位数字则为分服务器设置，按顺序分别为 国服/B服/外服，例如113代表国服B服Mgg,国外Enka',
      path: 'serv',
      type: 'text'
    }]
}]
