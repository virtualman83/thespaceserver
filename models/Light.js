module.exports = function (sequelize, Sequelize) {
	var classe = sequelize.define('Light', {
		ID: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},

		Red: {
			type: Sequelize.FLOAT,
			default:1
		},
		Green: {
			type: Sequelize.FLOAT,
			default:1
		},
		Blue: {
			type: Sequelize.FLOAT,
			default:1
		},
		InitialLightIntensity: {
			type: Sequelize.FLOAT,
			default:1
		},
		InitialLightInnerRadius: {
			type: Sequelize.FLOAT,
			default:2.71
		},
		InitialLightOuterRadius: {
			type: Sequelize.FLOAT,
			default:4.567774
		},
		FinalLightIntensity: {
			type: Sequelize.FLOAT,
			default:1
		},
		FinalLightInnerRadius: {
			type: Sequelize.FLOAT,
			default:2.71
		},
		FinalLightOuterRadius: {
			type: Sequelize.FLOAT,
			default:4.567774
		},
		PosInitialX: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		PosInitialY: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		InitialRotation: {
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
		FinalRotation: {
			type: Sequelize.FLOAT,
			defaultValue : 0
		},
		AnimationSpeed: {
			type: Sequelize.FLOAT,
			defaultValue : 1
		},
		Rotation: {
			type: Sequelize.BOOLEAN,
			defaultValue : false
		},
		RotationSpeed: {
			type: Sequelize.FLOAT,
			defaultValue : 0.01
		},
		LightShake: {
			type: Sequelize.BOOLEAN,
			defaultValue : false
		}
	},{
    timestamps: false
  });
	return classe;
}
