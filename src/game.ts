import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d6dea640-b953-48b9-bfb0-d750c5f43ba1/src/item"
import Script2 from "../84e3703b-d55b-426a-8078-d673bf306288/src/item"
import Script3 from "../80e32415-fcd9-40d2-a322-f046d8249eb4/src/item"
import Script4 from "../cfcce08c-5b0d-4a23-b7b8-0bee57932e1e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const strangePlanet = new Entity('strangePlanet')
engine.addEntity(strangePlanet)
strangePlanet.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(30, 3, 3),
  rotation: new Quaternion(0, 0, 0.2902846932411194, 0.9569404125213623),
  scale: new Vector3(1, 1, 1)
})
strangePlanet.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("dc909072-619f-41b1-92ce-2a02f28d93dc/Planet_02/Planet_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
strangePlanet.addComponentOrReplace(gltfShape2)

const curvedBarrierEnd = new Entity('curvedBarrierEnd')
engine.addEntity(curvedBarrierEnd)
curvedBarrierEnd.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(3, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedBarrierEnd.addComponentOrReplace(transform7)
const gltfShape3 = new GLTFShape("a2feb0bb-a805-40ff-83fb-337785bf7eb3/Fence_End_01/Fence_End_01.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
curvedBarrierEnd.addComponentOrReplace(gltfShape3)

const curvedBarrierEnd3 = new Entity('curvedBarrierEnd3')
engine.addEntity(curvedBarrierEnd3)
curvedBarrierEnd3.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(7, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedBarrierEnd3.addComponentOrReplace(transform8)
curvedBarrierEnd3.addComponentOrReplace(gltfShape3)

const curvedBarrierEnd5 = new Entity('curvedBarrierEnd5')
engine.addEntity(curvedBarrierEnd5)
curvedBarrierEnd5.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(15.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedBarrierEnd5.addComponentOrReplace(transform9)
curvedBarrierEnd5.addComponentOrReplace(gltfShape3)

const curvedBarrierEnd6 = new Entity('curvedBarrierEnd6')
engine.addEntity(curvedBarrierEnd6)
curvedBarrierEnd6.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(19, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedBarrierEnd6.addComponentOrReplace(transform10)
curvedBarrierEnd6.addComponentOrReplace(gltfShape3)

const curvedBarrierEnd7 = new Entity('curvedBarrierEnd7')
engine.addEntity(curvedBarrierEnd7)
curvedBarrierEnd7.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(22.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedBarrierEnd7.addComponentOrReplace(transform11)
curvedBarrierEnd7.addComponentOrReplace(gltfShape3)

const curvedBarrierEnd9 = new Entity('curvedBarrierEnd9')
engine.addEntity(curvedBarrierEnd9)
curvedBarrierEnd9.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(26.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedBarrierEnd9.addComponentOrReplace(transform12)
curvedBarrierEnd9.addComponentOrReplace(gltfShape3)

const terminal = new Entity('terminal')
engine.addEntity(terminal)
terminal.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(7.5, 0, 6),
  rotation: new Quaternion(-8.478706628391348e-15, -1, 1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(1.0000022649765015, 1, 1.0000022649765015)
})
terminal.addComponentOrReplace(transform13)
const gltfShape4 = new GLTFShape("f18835f5-da0e-4817-9762-9998696e25fe/Terminal_01/Terminal_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
terminal.addComponentOrReplace(gltfShape4)

const curvedHallJunction = new Entity('curvedHallJunction')
engine.addEntity(curvedHallJunction)
curvedHallJunction.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(10, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
curvedHallJunction.addComponentOrReplace(transform14)
const gltfShape5 = new GLTFShape("ec5d61c9-22b2-483f-81a7-46c02f582a9f/Hallway_Module_Curve_01/Hallway_Module_Curve_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
curvedHallJunction.addComponentOrReplace(gltfShape5)

const caribbeanWaterWithTwoSideRocks = new Entity('caribbeanWaterWithTwoSideRocks')
engine.addEntity(caribbeanWaterWithTwoSideRocks)
caribbeanWaterWithTwoSideRocks.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(7.5, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks.addComponentOrReplace(transform15)
const gltfShape6 = new GLTFShape("01d15783-7d05-42d6-a010-3db4b60c63dd/WaterPatchCornerOutside_01/WaterPatchCornerOutside_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
caribbeanWaterWithTwoSideRocks.addComponentOrReplace(gltfShape6)

const caribbeanWaterWithTwoSideRocks2 = new Entity('caribbeanWaterWithTwoSideRocks2')
engine.addEntity(caribbeanWaterWithTwoSideRocks2)
caribbeanWaterWithTwoSideRocks2.setParent(_scene)
caribbeanWaterWithTwoSideRocks2.addComponentOrReplace(gltfShape6)
const transform16 = new Transform({
  position: new Vector3(7.5, 0, 22.5),
  rotation: new Quaternion(-5.721927787269085e-16, 0.7071067690849304, -8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks2.addComponentOrReplace(transform16)

const caribbeanWaterWithTwoSideRocks3 = new Entity('caribbeanWaterWithTwoSideRocks3')
engine.addEntity(caribbeanWaterWithTwoSideRocks3)
caribbeanWaterWithTwoSideRocks3.setParent(_scene)
caribbeanWaterWithTwoSideRocks3.addComponentOrReplace(gltfShape6)
const transform17 = new Transform({
  position: new Vector3(24.5, 0, 22),
  rotation: new Quaternion(-5.67359905191407e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks3.addComponentOrReplace(transform17)

const caribbeanWaterWithTwoSideRocks4 = new Entity('caribbeanWaterWithTwoSideRocks4')
engine.addEntity(caribbeanWaterWithTwoSideRocks4)
caribbeanWaterWithTwoSideRocks4.setParent(_scene)
caribbeanWaterWithTwoSideRocks4.addComponentOrReplace(gltfShape6)
const transform18 = new Transform({
  position: new Vector3(24.5, 0, 22),
  rotation: new Quaternion(-1.1117268469197118e-14, 0.7071068286895752, -8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks4.addComponentOrReplace(transform18)

const caribbeanWater = new Entity('caribbeanWater')
engine.addEntity(caribbeanWater)
caribbeanWater.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(13, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater.addComponentOrReplace(transform19)
const gltfShape7 = new GLTFShape("390b876e-4b3a-4e78-bd03-5be21b1ecc67/WaterPatchFull_01/WaterPatchFull_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
caribbeanWater.addComponentOrReplace(gltfShape7)

const caribbeanWater2 = new Entity('caribbeanWater2')
engine.addEntity(caribbeanWater2)
caribbeanWater2.setParent(_scene)
caribbeanWater2.addComponentOrReplace(gltfShape7)
const transform20 = new Transform({
  position: new Vector3(13.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater2.addComponentOrReplace(transform20)

const musaAcuminata = new Entity('musaAcuminata')
engine.addEntity(musaAcuminata)
musaAcuminata.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
musaAcuminata.addComponentOrReplace(transform21)
const gltfShape8 = new GLTFShape("f36ca1ea-2529-4514-a8db-489bf44b6e78/JunglePlant_04/JunglePlant_04.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
musaAcuminata.addComponentOrReplace(gltfShape8)

const smallPalmTree = new Entity('smallPalmTree')
engine.addEntity(smallPalmTree)
smallPalmTree.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(5.75, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
smallPalmTree.addComponentOrReplace(transform22)
const gltfShape9 = new GLTFShape("3f7e1dbd-8693-409d-9dd9-2a06feaadec9/JunglePlant_07/JunglePlant_07.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
smallPalmTree.addComponentOrReplace(gltfShape9)

const tallPalmTree = new Entity('tallPalmTree')
engine.addEntity(tallPalmTree)
tallPalmTree.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(12.25, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree.addComponentOrReplace(transform23)
const gltfShape10 = new GLTFShape("a29c8a0e-1f2c-4d85-a099-36301da3fe36/PalmTree_02/PalmTree_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
tallPalmTree.addComponentOrReplace(gltfShape10)

const tallPalmTree2 = new Entity('tallPalmTree2')
engine.addEntity(tallPalmTree2)
tallPalmTree2.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(15, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree2.addComponentOrReplace(transform24)
tallPalmTree2.addComponentOrReplace(gltfShape10)

const bentPalmTree = new Entity('bentPalmTree')
engine.addEntity(bentPalmTree)
bentPalmTree.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(15, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree.addComponentOrReplace(transform25)
const gltfShape11 = new GLTFShape("e0db669f-e803-4528-bb16-e1e3001956d9/PalmTree_01/PalmTree_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
bentPalmTree.addComponentOrReplace(gltfShape11)

const bazaarTent = new Entity('bazaarTent')
engine.addEntity(bazaarTent)
bazaarTent.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(25.5, 0, 10.5),
  rotation: new Quaternion(-5.758073859501978e-16, 0.7071070075035095, -8.429371689544496e-8, 0.7071065902709961),
  scale: new Vector3(1.000001072883606, 1, 1.000001072883606)
})
bazaarTent.addComponentOrReplace(transform26)
const gltfShape12 = new GLTFShape("0149cae5-9e33-48aa-a346-94f02091ec75/Tent_02/Tent_02.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
bazaarTent.addComponentOrReplace(gltfShape12)

const caribbeanWater3 = new Entity('caribbeanWater3')
engine.addEntity(caribbeanWater3)
caribbeanWater3.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(21, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 2)
})
caribbeanWater3.addComponentOrReplace(transform27)
caribbeanWater3.addComponentOrReplace(gltfShape7)

const caribbeanWater4 = new Entity('caribbeanWater4')
engine.addEntity(caribbeanWater4)
caribbeanWater4.setParent(_scene)
caribbeanWater4.addComponentOrReplace(gltfShape7)
const transform28 = new Transform({
  position: new Vector3(21, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater4.addComponentOrReplace(transform28)

const caribbeanWater5 = new Entity('caribbeanWater5')
engine.addEntity(caribbeanWater5)
caribbeanWater5.setParent(_scene)
caribbeanWater5.addComponentOrReplace(gltfShape7)
const transform29 = new Transform({
  position: new Vector3(25.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater5.addComponentOrReplace(transform29)

const caribbeanWater6 = new Entity('caribbeanWater6')
engine.addEntity(caribbeanWater6)
caribbeanWater6.setParent(_scene)
caribbeanWater6.addComponentOrReplace(gltfShape7)
const transform30 = new Transform({
  position: new Vector3(25.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater6.addComponentOrReplace(transform30)

const theFountainOfSpirits = new Entity('theFountainOfSpirits')
engine.addEntity(theFountainOfSpirits)
theFountainOfSpirits.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(17, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
theFountainOfSpirits.addComponentOrReplace(transform31)
const gltfShape13 = new GLTFShape("fca5ed25-573f-4792-ac64-3d5a48933dec/Fountain_01/Fountain_01.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
theFountainOfSpirits.addComponentOrReplace(gltfShape13)

const closedWoodenCrate = new Entity('closedWoodenCrate')
engine.addEntity(closedWoodenCrate)
closedWoodenCrate.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(16.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
closedWoodenCrate.addComponentOrReplace(transform32)
const gltfShape14 = new GLTFShape("a43c7745-83ea-4e0b-ac7a-14609d5e4da1/Crate_01/Crate_01.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
closedWoodenCrate.addComponentOrReplace(gltfShape14)

const tallPalmTree3 = new Entity('tallPalmTree3')
engine.addEntity(tallPalmTree3)
tallPalmTree3.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(19, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree3.addComponentOrReplace(transform33)
tallPalmTree3.addComponentOrReplace(gltfShape10)

const bentPalmTree2 = new Entity('bentPalmTree2')
engine.addEntity(bentPalmTree2)
bentPalmTree2.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(25, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree2.addComponentOrReplace(transform34)
bentPalmTree2.addComponentOrReplace(gltfShape11)

const beachgrassFern2 = new Entity('beachgrassFern2')
engine.addEntity(beachgrassFern2)
beachgrassFern2.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(9, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
beachgrassFern2.addComponentOrReplace(transform35)
const gltfShape15 = new GLTFShape("7ea57b9c-29ee-47a5-9ad2-c109101b72ac/JunglePlant_06/JunglePlant_06.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
beachgrassFern2.addComponentOrReplace(gltfShape15)

const bamboo = new Entity('bamboo')
engine.addEntity(bamboo)
bamboo.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(12, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo.addComponentOrReplace(transform36)
const gltfShape16 = new GLTFShape("6922eea0-67a6-4559-917c-df33aa1d9954/Bamboo_01/Bamboo_01.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
bamboo.addComponentOrReplace(gltfShape16)

const bamboo6 = new Entity('bamboo6')
engine.addEntity(bamboo6)
bamboo6.setParent(_scene)
bamboo6.addComponentOrReplace(gltfShape16)
const transform37 = new Transform({
  position: new Vector3(10.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo6.addComponentOrReplace(transform37)

const bamboo7 = new Entity('bamboo7')
engine.addEntity(bamboo7)
bamboo7.setParent(_scene)
bamboo7.addComponentOrReplace(gltfShape16)
const transform38 = new Transform({
  position: new Vector3(11, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo7.addComponentOrReplace(transform38)

const bamboo8 = new Entity('bamboo8')
engine.addEntity(bamboo8)
bamboo8.setParent(_scene)
bamboo8.addComponentOrReplace(gltfShape16)
const transform39 = new Transform({
  position: new Vector3(13, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo8.addComponentOrReplace(transform39)

const bamboo9 = new Entity('bamboo9')
engine.addEntity(bamboo9)
bamboo9.setParent(_scene)
bamboo9.addComponentOrReplace(gltfShape16)
const transform40 = new Transform({
  position: new Vector3(13.5, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bamboo9.addComponentOrReplace(transform40)

const parrot = new Entity('parrot')
engine.addEntity(parrot)
parrot.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(16.5, 0.5, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
parrot.addComponentOrReplace(transform41)

const fishBones = new Entity('fishBones')
engine.addEntity(fishBones)
fishBones.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(26.5, 0, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fishBones.addComponentOrReplace(transform42)
const gltfShape17 = new GLTFShape("006a4025-d41f-4829-b6de-9379a5b03415/FishSkeleton_01/FishSkeleton_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
fishBones.addComponentOrReplace(gltfShape17)

const rusticSquareStool = new Entity('rusticSquareStool')
engine.addEntity(rusticSquareStool)
rusticSquareStool.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(25.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticSquareStool.addComponentOrReplace(transform43)
const gltfShape18 = new GLTFShape("67d5ce70-8e2c-4ae3-9723-f8216d1e8685/Chairwood_02/Chairwood_02.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
rusticSquareStool.addComponentOrReplace(gltfShape18)

const rusticRoundStool = new Entity('rusticRoundStool')
engine.addEntity(rusticRoundStool)
rusticRoundStool.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(26.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rusticRoundStool.addComponentOrReplace(transform44)
const gltfShape19 = new GLTFShape("d2e06987-41cf-4eb7-ac66-81c5fcee96d5/Chairwood_01/Chairwood_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
rusticRoundStool.addComponentOrReplace(gltfShape19)

const woodenBench = new Entity('woodenBench')
engine.addEntity(woodenBench)
woodenBench.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(26, 0, 10),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenBench.addComponentOrReplace(transform45)
const gltfShape20 = new GLTFShape("0aad0306-c7e1-4cd1-87ef-ec7cb558f6be/Bench_01/Bench_01.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
woodenBench.addComponentOrReplace(gltfShape20)

const tallPalmTree4 = new Entity('tallPalmTree4')
engine.addEntity(tallPalmTree4)
tallPalmTree4.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(27, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree4.addComponentOrReplace(transform46)
tallPalmTree4.addComponentOrReplace(gltfShape10)

const tallPalmTree5 = new Entity('tallPalmTree5')
engine.addEntity(tallPalmTree5)
tallPalmTree5.setParent(_scene)
tallPalmTree5.addComponentOrReplace(gltfShape10)
const transform47 = new Transform({
  position: new Vector3(29, 0, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree5.addComponentOrReplace(transform47)

const bentPalmTree3 = new Entity('bentPalmTree3')
engine.addEntity(bentPalmTree3)
bentPalmTree3.setParent(_scene)
bentPalmTree3.addComponentOrReplace(gltfShape11)
const transform48 = new Transform({
  position: new Vector3(30.875, 0, 15.75),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bentPalmTree3.addComponentOrReplace(transform48)

const tallPalmTree6 = new Entity('tallPalmTree6')
engine.addEntity(tallPalmTree6)
tallPalmTree6.setParent(_scene)
tallPalmTree6.addComponentOrReplace(gltfShape10)
const transform49 = new Transform({
  position: new Vector3(28.125, 0, 15.25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tallPalmTree6.addComponentOrReplace(transform49)

const rowboat = new Entity('rowboat')
engine.addEntity(rowboat)
rowboat.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(23.5, 0, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rowboat.addComponentOrReplace(transform50)
const gltfShape21 = new GLTFShape("513ca317-77eb-4b76-b1a5-f9ba1c61959e/Boat_01/Boat_01.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
rowboat.addComponentOrReplace(gltfShape21)

const blueWeepingWillowTree = new Entity('blueWeepingWillowTree')
engine.addEntity(blueWeepingWillowTree)
blueWeepingWillowTree.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(5, 0, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
blueWeepingWillowTree.addComponentOrReplace(transform51)
const gltfShape22 = new GLTFShape("a917defc-3e47-4e55-90a6-dd6c4f03c9f5/Tree_Leafs_02/Tree_Leafs_02.glb")
gltfShape22.withCollisions = true
gltfShape22.isPointerBlocker = true
gltfShape22.visible = true
blueWeepingWillowTree.addComponentOrReplace(gltfShape22)

const clawStalagmite = new Entity('clawStalagmite')
engine.addEntity(clawStalagmite)
clawStalagmite.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(21, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
clawStalagmite.addComponentOrReplace(transform52)
const gltfShape23 = new GLTFShape("52af4f61-5895-41b5-a679-99bf841df1c0/Stalagmite_03/Stalagmite_03.glb")
gltfShape23.withCollisions = true
gltfShape23.isPointerBlocker = true
gltfShape23.visible = true
clawStalagmite.addComponentOrReplace(gltfShape23)

const bloomingPinkAcaciaTree = new Entity('bloomingPinkAcaciaTree')
engine.addEntity(bloomingPinkAcaciaTree)
bloomingPinkAcaciaTree.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(28, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bloomingPinkAcaciaTree.addComponentOrReplace(transform53)
const gltfShape24 = new GLTFShape("84d1a6c5-7928-4a77-b8c4-b22952ee8b15/Tree_Forest_Pink_02/Tree_Forest_Pink_02.glb")
gltfShape24.withCollisions = true
gltfShape24.isPointerBlocker = true
gltfShape24.visible = true
bloomingPinkAcaciaTree.addComponentOrReplace(gltfShape24)

const luxuriousLampPost = new Entity('luxuriousLampPost')
engine.addEntity(luxuriousLampPost)
luxuriousLampPost.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(17, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
luxuriousLampPost.addComponentOrReplace(transform54)
const gltfShape25 = new GLTFShape("1f68abf3-dcdc-47f5-9488-68fe355b3818/LampPost_01/LampPost_01.glb")
gltfShape25.withCollisions = true
gltfShape25.isPointerBlocker = true
gltfShape25.visible = true
luxuriousLampPost.addComponentOrReplace(gltfShape25)

const wizardGemstonePillar = new Entity('wizardGemstonePillar')
engine.addEntity(wizardGemstonePillar)
wizardGemstonePillar.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(23, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wizardGemstonePillar.addComponentOrReplace(transform55)
const gltfShape26 = new GLTFShape("209fac77-3ea9-41fa-8a3c-dec67280db1f/Pillar_Magic_01/Pillar_Magic_01.glb")
gltfShape26.withCollisions = true
gltfShape26.isPointerBlocker = true
gltfShape26.visible = true
wizardGemstonePillar.addComponentOrReplace(gltfShape26)

const videoBillboardWhite = new Entity('videoBillboardWhite')
engine.addEntity(videoBillboardWhite)
videoBillboardWhite.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(1.5, 0, 13),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
videoBillboardWhite.addComponentOrReplace(transform56)

const signpostTree2 = new Entity('signpostTree2')
engine.addEntity(signpostTree2)
signpostTree2.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(23, 3, 4),
  rotation: new Quaternion(-2.404514779018145e-19, -0.6343933939933777, 7.562557868823205e-8, 0.7730104327201843),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
signpostTree2.addComponentOrReplace(transform57)

const qrScifiSimpleFram = new Entity('qrScifiSimpleFram')
engine.addEntity(qrScifiSimpleFram)
qrScifiSimpleFram.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(12.5, 3, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
qrScifiSimpleFram.addComponentOrReplace(transform58)

const marbleCheckersTile = new Entity('marbleCheckersTile')
engine.addEntity(marbleCheckersTile)
marbleCheckersTile.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(7.5, 0, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
marbleCheckersTile.addComponentOrReplace(transform59)
const gltfShape27 = new GLTFShape("81eb0547-ef35-4f8d-8cfe-16350b2a278b/Tile_Floor_01/Tile_Floor_01.glb")
gltfShape27.withCollisions = true
gltfShape27.isPointerBlocker = true
gltfShape27.visible = true
marbleCheckersTile.addComponentOrReplace(gltfShape27)

const ritualPedestal = new Entity('ritualPedestal')
engine.addEntity(ritualPedestal)
ritualPedestal.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(29, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ritualPedestal.addComponentOrReplace(transform60)
const gltfShape28 = new GLTFShape("f43f78f7-cd7f-48ab-82cf-21796bf7822d/Pedestal_01/Pedestal_01.glb")
gltfShape28.withCollisions = true
gltfShape28.isPointerBlocker = true
gltfShape28.visible = true
ritualPedestal.addComponentOrReplace(gltfShape28)

const largeEvergreenTurf = new Entity('largeEvergreenTurf')
engine.addEntity(largeEvergreenTurf)
largeEvergreenTurf.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(31.5, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.7009992599487305, 1, 1.9999996423721313)
})
largeEvergreenTurf.addComponentOrReplace(transform61)
const gltfShape29 = new GLTFShape("c621c6ca-e045-45be-b81b-7b5ae69f2ea0/Grass_Module_4M/Grass_Module_4M.glb")
gltfShape29.withCollisions = true
gltfShape29.isPointerBlocker = true
gltfShape29.visible = true
largeEvergreenTurf.addComponentOrReplace(gltfShape29)

const largeEvergreenTurf2 = new Entity('largeEvergreenTurf2')
engine.addEntity(largeEvergreenTurf2)
largeEvergreenTurf2.setParent(_scene)
largeEvergreenTurf2.addComponentOrReplace(gltfShape29)
const transform62 = new Transform({
  position: new Vector3(31.5, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9637542963027954, 1, 1.9999994039535522)
})
largeEvergreenTurf2.addComponentOrReplace(transform62)

const largeEvergreenTurf3 = new Entity('largeEvergreenTurf3')
engine.addEntity(largeEvergreenTurf3)
largeEvergreenTurf3.setParent(_scene)
largeEvergreenTurf3.addComponentOrReplace(gltfShape29)
const transform63 = new Transform({
  position: new Vector3(8.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9637542963027954, 1, 1.9999994039535522)
})
largeEvergreenTurf3.addComponentOrReplace(transform63)

const caribbeanWater7 = new Entity('caribbeanWater7')
engine.addEntity(caribbeanWater7)
caribbeanWater7.setParent(_scene)
caribbeanWater7.addComponentOrReplace(gltfShape7)
const transform64 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater7.addComponentOrReplace(transform64)

const caribbeanWater8 = new Entity('caribbeanWater8')
engine.addEntity(caribbeanWater8)
caribbeanWater8.setParent(_scene)
caribbeanWater8.addComponentOrReplace(gltfShape7)
const transform65 = new Transform({
  position: new Vector3(26, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWater8.addComponentOrReplace(transform65)

const caribbeanWaterWithTwoSideRocks5 = new Entity('caribbeanWaterWithTwoSideRocks5')
engine.addEntity(caribbeanWaterWithTwoSideRocks5)
caribbeanWaterWithTwoSideRocks5.setParent(_scene)
caribbeanWaterWithTwoSideRocks5.addComponentOrReplace(gltfShape6)
const transform66 = new Transform({
  position: new Vector3(15, 0, 15),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks5.addComponentOrReplace(transform66)

const caribbeanWaterWithTwoSideRocks6 = new Entity('caribbeanWaterWithTwoSideRocks6')
engine.addEntity(caribbeanWaterWithTwoSideRocks6)
caribbeanWaterWithTwoSideRocks6.setParent(_scene)
caribbeanWaterWithTwoSideRocks6.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(17.5, 0, 14.5),
  rotation: new Quaternion(-1.1117268469197118e-14, 0.7071068286895752, -8.429369557916289e-8, -0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
caribbeanWaterWithTwoSideRocks6.addComponentOrReplace(transform67)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform68 = new Transform({
  position: new Vector3(7.5, 3.5, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 4.5, 1.0000001192092896)
})
nft.addComponentOrReplace(transform68)
const nftShape = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/49353854911961153968343794823796363912975378069134639156052085027505260462081")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(17, 5, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.000000476837158, 3.5, 1.0000004768371582)
})
nft2.addComponentOrReplace(transform69)
const nftShape2 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/49353854911961153968343794823796363912975378069134639156052085028604772089857")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft3 = new Entity('nft3')
engine.addEntity(nft3)
nft3.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(17, 4, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.75, 8, 0.9999999403953552)
})
nft3.addComponentOrReplace(transform70)
const nftShape3 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/49353854911961153968343794823796363912975378069134639156052085031903306973185")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft3.addComponentOrReplace(nftShape3)

const nft4 = new Entity('nft4')
engine.addEntity(nft4)
nft4.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(7.5, 2.5, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft4.addComponentOrReplace(transform71)
const nftShape4 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/49353854911961153968343794823796363912975378069134639156052085019808679067649")
nftShape4.withCollisions = true
nftShape4.isPointerBlocker = true
nftShape4.visible = true
nftShape4.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft4.addComponentOrReplace(nftShape4)

const nft5 = new Entity('nft5')
engine.addEntity(nft5)
nft5.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(18, 1.5, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.5, 30, 1.0000011920928955)
})
nft5.addComponentOrReplace(transform72)
const nftShape5 = new NFTShape("ethereum://0x495f947276749ce646f68ac8c248420045cb7b5e/49353854911961153968343794823796363912975378069134639156052085033002818600961")
nftShape5.withCollisions = true
nftShape5.isPointerBlocker = true
nftShape5.visible = true
nftShape5.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft5.addComponentOrReplace(nftShape5)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script1.spawn(parrot, {}, createChannel(channelId, parrot, channelBus))
script2.spawn(videoBillboardWhite, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoBillboardWhite","actionId":"toggle","values":{}}],"customStation":"https://www.youtube.com/watch?v=TAU4jOcBx64"}, createChannel(channelId, videoBillboardWhite, channelBus))
script3.spawn(signpostTree2, {"text":"Bali Scene","fontSize":30}, createChannel(channelId, signpostTree2, channelBus))
script4.spawn(qrScifiSimpleFram, {"publicKey":"0x6d1D4ABdFEed5967a4c4ec1444C503F849EF6160"}, createChannel(channelId, qrScifiSimpleFram, channelBus))