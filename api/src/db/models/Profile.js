const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
  user_id: {
    type: String
  },

  /* Agora */

  outcome: {
    outcome1: {
      generalcomment: {
        type: String
      },
      techcomment: {
        type: String
      },
      aprove: {
        type: Boolean,
        default: true
      }
    },
    outcome2: {
      generalcomment: {
        type: String
      },
      techcomment: {
        type: String
      },
      aprove: {
        type: Boolean,
        default: true
      }
    },
    outcome3: {
      generalcomment: {
        type: String
      },
      techcomment: {
        type: String
      },
      aprove: {
        type: Boolean,
        default: true
      }
    },
    outcome4: {
      generalcomment: {
        type: String
      },
      techcomment: {
        type: String
      },
      aprove: {
        type: Boolean,
        default: true
      }
    },
    outcome5: {
      generalcomment: {
        type: String
      },
      techcomment: {
        type: String
      },
      aprove: {
        type: Boolean,
        default: true
      }
    },
    outcome6: {
      generalcomment: {
        type: String
      },
      techcomment: {
        type: String
      },
      aprove: {
        type: Boolean,
        default: true
      }
    }
  },

  badges: {
    badges1: {
      aprove: {
        type: Boolean,
        default: true
      }
    },
    badges2: {
      aprove: {
        type: Boolean,
        default: true
      }
    },
    badges3: {
      aprove: {
        type: Boolean,
        default: true
      }
    },
    badges4: {
      aprove: {
        type: Boolean,
        default: true
      }
    },
    badges5: {
      aprove: {
        type: Boolean,
        default: true
      }
    }
  },

  /* fin Agora */

  /* mentoria */

  gender: {
    type: Number,
    required: true
  },

  mentorAssigment: {
    type: String,
    require: true
  },

  prev_studes: {
    type: String,
    require: true
  },

  actualAge: {
    type: Number,
    required: true
  },
  sesiones: {
    type: Number,
    require: true
  },

  interest: {
    type: Array,
    require: true
  },

  /* fin mentoria */

  /* Social Programate */

  experience: {
    type: 'string',
    trim: true,
    require: true,
    lowercase: true
  },
  description: {
    type: 'string',
    trim: true,
    require: true,
    lowercase: true
  },
  github: {
    type: 'string',
    trim: true,
    require: true,
    lowercase: true
  },
  softSkills: {
    type: 'string',
    trim: true,
    require: true,
    lowercase: true
  },
  technicalSkills: {
    type: 'string',
    trim: true,
    require: true,
    lowercase: true
  },

  /* fin social programate */

  /* Proceso de seleccion */
  documentType: {
    type: Number,
    required: true
  },
  documentNumber: {
    type: Number,
    required: true,
    minlength: 6
  },
  documentPdf: {
    type: binData,
    required: true
  },
  secondContactNumber: {
    type: Number,
    required: true
  },
  nacionality: {
    type: String,
    required: true
  },
  residencyDepartment: String,
  municipalityOfResidency: String,
  locationInBogota: String,
  socioeconomicStratus: {
    type: Number,
    required: true
  },
  migrant: {
    type: Boolean,
    required: true
  },
  livesInColombia: {
    type: Boolean,
    required: true
  },
  address: {
    type: String,
    required: true,
    maxlength: 45
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  birthdayOnFormation: Date,

  maritalStatus: {
    type: Number,
    required: true
  },
  academicLevel: {
    type: Number,
    required: true
  },
  degreeTitle: {
    type: String,
    maxlength: 45
  },
  currentOccupation: {
    type: Number,
    required: true
  },
  unemployedTime: String,
  formaltOccupation: {
    type: Boolean,
    required: true,
    maxlength: 45
  },
  victimArmedConflict: {
    type: Boolean,
    required: true
  },
  pcAccess: {
    type: Boolean,
    required: true
  },
  programataPrevoiousTimes: {
    type: Number,
    required: true
  },
  motivation: {
    type: String,
    required: true,
    maxlength: 300
  },
  dreams: {
    type: String,
    required: true,
    maxlength: 300
  },
  soloLearnProfile: {
    type: Number,
    reuired: true,
    minlength: 6
  },
  status: {
    inscrito: true,
    espera: false,
    citado: false,
    agendado: false,
    entrevistado: false,
    paso: false
  },
  convocatoria: String,
  resultados: Number,
  fechaEntrevista: Date,
  urlPrueba: String,
  promedioEntrevista: Number

  /* fin proceso seleccion  */
})

profileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Profile = model('Profile', profileSchema)
Profile.create({
  gender: 'hombre',
  mentorAssigment: 'maria',
  prev_studes: 'avila',
  actualAge: 17,
  sesiones: 1,
  interest: 123456

})
module.exports = Profile
