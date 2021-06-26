const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` 
router.get('/', async (req, res) => {

  try {
    const tagData = await Tag.findAll({
    include: [{model: ProductTag, model: Product}],
    });
    res.status(200).json(tagData);
    console.log(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});
// /api/tags/id
router.get('/:id', async (req, res) => {
  
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: ProductTag, model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {

  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {

  const tagData = await Tag.findByPk(req.params.id)

    if(tagData) {
        tagData.tag_name = req.body.tag_name;
     
        await tagData.save()
    }
    else {
        res.status(404).send()
    }
    return res.json(tagData);

});

router.delete('/:id', async (req, res) => {
 
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(tagData);
});

module.exports = router;
