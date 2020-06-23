module.exports = function (sequelize, Sequelize) {
	var classe = sequelize.define('ElementTransform', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		PosInitialX: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		PosInitialY: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		InitialScale: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		InitialRotation: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		InitialAlpha: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		PosFinalX: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		PosFinalY: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		FinalScale: {
			type: Sequelize.FLOAT,
			defaultValue : 1
		},
		FinalRotation: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		FinalAlpha: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		AnimationSpeed: {
			type: Sequelize.FLOAT,
			defaultValue : 1
		},
		ZOrder: {
			type: Sequelize.INTEGER,
			defaultValue : 1
		},
		flipX: {
			type: Sequelize.BOOLEAN,
			defaultValue : false
		},
		flipY: {
			type: Sequelize.BOOLEAN,
			defaultValue : false
		},
		Rotation: {
			type: Sequelize.BOOLEAN,
			defaultValue : false
		},
		RotationSpeed: {
			type: Sequelize.FLOAT,
			defaultValue : 0.01
		},
		ElementType: {
			type: Sequelize.STRING
		}
	},{
    timestamps: false
  });
	return classe;
}
