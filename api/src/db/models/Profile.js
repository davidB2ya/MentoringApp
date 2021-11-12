const { Schema, model } = require('mongoose')

// schema creation for profiles
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

  // the ft key stores the gender profile
  gender: {
    type: Number,
    required: true
  },

  // the academic_level key stores the academic level of the profile
  academic_level: {
    type: Number
  },

  // the idUser key stores the age of the profile
  actualAge: {
    type: Number,
    required: true
  },

  // the idUser key stores the profile photo
  photo: {
    type: String
  },

  /* fin mentoria */

  /* Social Programate */

  experience: {
    type: 'string',
    trim: true,
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
  // documentPdf: {
  //   type: binData,
  //   required: true
  // },
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
    inscrito: Boolean,
    espera: Boolean,
    citado: Boolean,
    agendado: Boolean,
    entrevistado: Boolean,
    paso: Boolean
  },
  convocatoria: String,
  resultados: Number,
  fechaEntrevista: Date,
  urlPrueba: String,
  promedioEntrevista: Number

  /* fin proceso seleccion  */
})

// fixes in profileSchema
profileSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// compilation of Profile model
const Profile = model('Profile', profileSchema)

module.exports = Profile
