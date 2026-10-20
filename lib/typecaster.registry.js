export default {
  "models": {
    "User": {
      "name": "User",
      "fields": {
        "id": {
          "name": "id",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "autoincrement("
            }
          ]
        },
        "access_level": {
          "name": "access_level",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "1"
            }
          ]
        },
        "role": {
          "name": "role",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "surname": {
          "name": "surname",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "email": {
          "name": "email",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "username": {
          "name": "username",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "password_hash": {
          "name": "password_hash",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "is_verified": {
          "name": "is_verified",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "verification_token": {
          "name": "verification_token",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "verification_token_expires_at": {
          "name": "verification_token_expires_at",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reset_token": {
          "name": "reset_token",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "reset_token_expires_at": {
          "name": "reset_token_expires_at",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "last_login_at": {
          "name": "last_login_at",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "failed_login_attempts": {
          "name": "failed_login_attempts",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "status": {
          "name": "status",
          "type": "UserStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "ACTIVE"
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            },
            {
              "name": "map",
              "arguments": "\"created_at\""
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            },
            {
              "name": "updatedAt",
              "arguments": null
            },
            {
              "name": "map",
              "arguments": "\"updated_at\""
            }
          ]
        },
        "userSettings": {
          "name": "userSettings",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "authLogs": {
          "name": "authLogs",
          "type": "AuthLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "AuthLog",
            "isList": true
          },
          "attributes": []
        },
        "sessions": {
          "name": "sessions",
          "type": "Session",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Session",
            "isList": true
          },
          "attributes": []
        },
        "loginVerifications": {
          "name": "loginVerifications",
          "type": "LoginVerification",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "LoginVerification",
            "isList": true
          },
          "attributes": []
        },
        "ownedOrganization": {
          "name": "ownedOrganization",
          "type": "Organization",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OrganizationOwner\""
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OrganizationMembers\", fields: [organizationId], references: [id]"
            }
          ]
        },
        "reviewedBehaviorAIDrafts": {
          "name": "reviewedBehaviorAIDrafts",
          "type": "BehaviorAIDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorAIDraft",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorAIReviewer\""
            }
          ]
        },
        "documentedBehaviorDailyLogEntries": {
          "name": "documentedBehaviorDailyLogEntries",
          "type": "BehaviorDailyLogEntry",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntry",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorDailyLogDocumenter\""
            }
          ]
        },
        "createdBehaviorDailyLogs": {
          "name": "createdBehaviorDailyLogs",
          "type": "BehaviorDailyLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLog",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorDailyLogCreator\""
            }
          ]
        },
        "behaviorEpisodes": {
          "name": "behaviorEpisodes",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorDocumenter\""
            }
          ]
        },
        "behaviorFollowUps": {
          "name": "behaviorFollowUps",
          "type": "BehaviorFollowUp",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorFollowUp",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorFollowUpAssignee\""
            }
          ]
        },
        "careDeliveries": {
          "name": "careDeliveries",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CareDeliveryDocumenter\""
            }
          ]
        },
        "careDeliveryFollowUps": {
          "name": "careDeliveryFollowUps",
          "type": "CareDeliveryFollowUp",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryFollowUp",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CareDeliveryFollowUpAssignee\""
            }
          ]
        },
        "approvedCarePlanTemplates": {
          "name": "approvedCarePlanTemplates",
          "type": "CarePlanTemplate",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplate",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TemplateApprover\""
            }
          ]
        },
        "createdCarePlanTemplates": {
          "name": "createdCarePlanTemplates",
          "type": "CarePlanTemplate",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplate",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TemplateCreator\""
            }
          ]
        },
        "updatedCarePlanTemplates": {
          "name": "updatedCarePlanTemplates",
          "type": "CarePlanTemplate",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplate",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TemplateUpdater\""
            }
          ]
        },
        "activatedCarePlanVersions": {
          "name": "activatedCarePlanVersions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionActivator\""
            }
          ]
        },
        "createdCarePlanVersions": {
          "name": "createdCarePlanVersions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionCreator\""
            }
          ]
        },
        "finalizedCarePlanVersions": {
          "name": "finalizedCarePlanVersions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionFinalizer\""
            }
          ]
        },
        "supersededCarePlanVersions": {
          "name": "supersededCarePlanVersions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionSuperseder\""
            }
          ]
        },
        "workflowEventPerformers": {
          "name": "workflowEventPerformers",
          "type": "CarePlanWorkflowEvent",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflowEvent",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"WorkflowEventPerformer\""
            }
          ]
        },
        "workflowTaskAssignees": {
          "name": "workflowTaskAssignees",
          "type": "CarePlanWorkflowTask",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflowTask",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"WorkflowTaskAssignee\""
            }
          ]
        },
        "createdCarePlans": {
          "name": "createdCarePlans",
          "type": "CarePlan",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanCreator\""
            }
          ]
        },
        "updatedCarePlans": {
          "name": "updatedCarePlans",
          "type": "CarePlan",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanUpdater\""
            }
          ]
        },
        "completedAssessments": {
          "name": "completedAssessments",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"AssessmentCompleter\""
            }
          ]
        },
        "createdAssessments": {
          "name": "createdAssessments",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"AssessmentCreator\""
            }
          ]
        },
        "updatedAssessments": {
          "name": "updatedAssessments",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"AssessmentUpdater\""
            }
          ]
        },
        "residentClosures": {
          "name": "residentClosures",
          "type": "ResidentClosure",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentClosure",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentClosureResponsiblePerson\""
            }
          ]
        },
        "completedResidentReviews": {
          "name": "completedResidentReviews",
          "type": "ResidentReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentReview",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentReviewCompleter\""
            }
          ]
        },
        "residentReviews": {
          "name": "residentReviews",
          "type": "ResidentReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentReview",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentReviewReviewer\""
            }
          ]
        },
        "createdResidentDemographics": {
          "name": "createdResidentDemographics",
          "type": "ResidentDemographics",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentDemographics",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentDemographicsCreator\""
            }
          ]
        },
        "updatedResidentDemographics": {
          "name": "updatedResidentDemographics",
          "type": "ResidentDemographics",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentDemographics",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentDemographicsUpdater\""
            }
          ]
        },
        "taskDefinitionsResponsible": {
          "name": "taskDefinitionsResponsible",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskDefinitionResponsible\""
            }
          ]
        },
        "taskDraftsReviewed": {
          "name": "taskDraftsReviewed",
          "type": "TaskDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDraft",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskDraftReviewer\""
            }
          ]
        },
        "taskDraftsFlagged": {
          "name": "taskDraftsFlagged",
          "type": "TaskDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDraft",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskDraftFlagger\""
            }
          ]
        },
        "occurrencesStarted": {
          "name": "occurrencesStarted",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OccurrenceStarter\""
            }
          ]
        },
        "occurrencesCompleted": {
          "name": "occurrencesCompleted",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OccurrenceCompleter\""
            }
          ]
        },
        "occurrenceLogs": {
          "name": "occurrenceLogs",
          "type": "TaskOccurrenceLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrenceLog",
            "isList": true
          },
          "attributes": []
        },
        "activitiesStarted": {
          "name": "activitiesStarted",
          "type": "CareDeliveryActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivity",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ActivityStarter\""
            }
          ]
        },
        "activitiesCompleted": {
          "name": "activitiesCompleted",
          "type": "CareDeliveryActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivity",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ActivityCompleter\""
            }
          ]
        },
        "activityParticipations": {
          "name": "activityParticipations",
          "type": "CareDeliveryActivityParticipant",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivityParticipant",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "LoginVerification": {
      "name": "LoginVerification",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "userId": {
          "name": "userId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "codeHash": {
          "name": "codeHash",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "expiresAt": {
          "name": "expiresAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "attempts": {
          "name": "attempts",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "maxAttempts": {
          "name": "maxAttempts",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "5"
            }
          ]
        },
        "usedAt": {
          "name": "usedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ipAddress": {
          "name": "ipAddress",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "userAgent": {
          "name": "userAgent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "user": {
          "name": "user",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [userId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "Session": {
      "name": "Session",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "userId": {
          "name": "userId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "token": {
          "name": "token",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "device_info": {
          "name": "device_info",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ip_address": {
          "name": "ip_address",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "is_revoked": {
          "name": "is_revoked",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "revoked_at": {
          "name": "revoked_at",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "expires_at": {
          "name": "expires_at",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "user": {
          "name": "user",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [userId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "AuthLog": {
      "name": "AuthLog",
      "fields": {
        "id": {
          "name": "id",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "autoincrement("
            }
          ]
        },
        "userId": {
          "name": "userId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ip": {
          "name": "ip",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "userAgent": {
          "name": "userAgent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "event": {
          "name": "event",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "user": {
          "name": "user",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [userId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "Organization": {
      "name": "Organization",
      "fields": {
        "id": {
          "name": "id",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "autoincrement("
            }
          ]
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "subdomain": {
          "name": "subdomain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "customDomain": {
          "name": "customDomain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "domainVerified": {
          "name": "domainVerified",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "dnsConfig": {
          "name": "dnsConfig",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pricingPackageId": {
          "name": "pricingPackageId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "settings": {
          "name": "settings",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "paidPeriodStart": {
          "name": "paidPeriodStart",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "paidPeriodEnd": {
          "name": "paidPeriodEnd",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "trialEndsAt": {
          "name": "trialEndsAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "trialStartedAt": {
          "name": "trialStartedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ownerId": {
          "name": "ownerId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": "map: \"Organization_ownerId_unique_key\""
            },
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "contactPerson": {
          "name": "contactPerson",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "map",
              "arguments": "\"contact_person\""
            }
          ]
        },
        "email": {
          "name": "email",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "mobile": {
          "name": "mobile",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "website": {
          "name": "website",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "map",
              "arguments": "\"website\""
            }
          ]
        },
        "businessType": {
          "name": "businessType",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "displayName": {
          "name": "displayName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "legalName": {
          "name": "legalName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "profileCompleted": {
          "name": "profileCompleted",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "profileCompletedAt": {
          "name": "profileCompletedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "registrationNumber": {
          "name": "registrationNumber",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "taxId": {
          "name": "taxId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "apiKeys": {
          "name": "apiKeys",
          "type": "ApiKey",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ApiKey",
            "isList": true
          },
          "attributes": []
        },
        "behaviorDailyLogs": {
          "name": "behaviorDailyLogs",
          "type": "BehaviorDailyLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLog",
            "isList": true
          },
          "attributes": []
        },
        "behaviorEpisodes": {
          "name": "behaviorEpisodes",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": true
          },
          "attributes": []
        },
        "careDeliveries": {
          "name": "careDeliveries",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": true
          },
          "attributes": []
        },
        "carePlanTemplates": {
          "name": "carePlanTemplates",
          "type": "CarePlanTemplate",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplate",
            "isList": true
          },
          "attributes": []
        },
        "carePlans": {
          "name": "carePlans",
          "type": "CarePlan",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": true
          },
          "attributes": []
        },
        "facilities": {
          "name": "facilities",
          "type": "Facility",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Facility",
            "isList": true
          },
          "attributes": []
        },
        "owner": {
          "name": "owner",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OrganizationOwner\", fields: [ownerId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "pricingPackage": {
          "name": "pricingPackage",
          "type": "PricingPackage",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "PricingPackage",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [pricingPackageId], references: [id]"
            }
          ]
        },
        "packagePayments": {
          "name": "packagePayments",
          "type": "PackagePayment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "PackagePayment",
            "isList": true
          },
          "attributes": []
        },
        "closures": {
          "name": "closures",
          "type": "ResidentClosure",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentClosure",
            "isList": true
          },
          "attributes": []
        },
        "reviews": {
          "name": "reviews",
          "type": "ResidentReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentReview",
            "isList": true
          },
          "attributes": []
        },
        "residents": {
          "name": "residents",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": true
          },
          "attributes": []
        },
        "roles": {
          "name": "roles",
          "type": "Role",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Role",
            "isList": true
          },
          "attributes": []
        },
        "users": {
          "name": "users",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OrganizationMembers\""
            }
          ]
        },
        "taskCategories": {
          "name": "taskCategories",
          "type": "TaskCategory",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskCategory",
            "isList": true
          },
          "attributes": []
        },
        "taskPriorities": {
          "name": "taskPriorities",
          "type": "TaskPriority",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskPriority",
            "isList": true
          },
          "attributes": []
        },
        "taskEscalationPolicies": {
          "name": "taskEscalationPolicies",
          "type": "TaskEscalationPolicy",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskEscalationPolicy",
            "isList": true
          },
          "attributes": []
        },
        "taskDefinitions": {
          "name": "taskDefinitions",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": []
        },
        "taskOccurrences": {
          "name": "taskOccurrences",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": []
        },
        "taskOccurrenceLogs": {
          "name": "taskOccurrenceLogs",
          "type": "TaskOccurrenceLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrenceLog",
            "isList": true
          },
          "attributes": []
        },
        "taskDrafts": {
          "name": "taskDrafts",
          "type": "TaskDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDraft",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "Feature": {
      "name": "Feature",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "unit": {
          "name": "unit",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "timeframe": {
          "name": "timeframe",
          "type": "Timeframe",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "MONTHLY"
            }
          ]
        },
        "count": {
          "name": "count",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "on_off": {
          "name": "on_off",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "non_crud": {
          "name": "non_crud",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "non_crud_feature_set_name": {
          "name": "non_crud_feature_set_name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isSystemFeature": {
          "name": "isSystemFeature",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "pricingPackageFeatures": {
          "name": "pricingPackageFeatures",
          "type": "PricingPackageFeature",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "PricingPackageFeature",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "PackagePayment": {
      "name": "PackagePayment",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pricingPackageId": {
          "name": "pricingPackageId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "amount": {
          "name": "amount",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "paymentStatus": {
          "name": "paymentStatus",
          "type": "PaymentStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "PENDING"
            }
          ]
        },
        "billingCycle": {
          "name": "billingCycle",
          "type": "BillingCycle",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "MONTHLY"
            }
          ]
        },
        "rawTransactionResponse": {
          "name": "rawTransactionResponse",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rawTransactionLog": {
          "name": "rawTransactionLog",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id]"
            }
          ]
        },
        "pricingPackage": {
          "name": "pricingPackage",
          "type": "PricingPackage",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "PricingPackage",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [pricingPackageId], references: [id]"
            }
          ]
        }
      }
    },
    "PricingPackage": {
      "name": "PricingPackage",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "priceMonthly": {
          "name": "priceMonthly",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "priceYearly": {
          "name": "priceYearly",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "isStandard": {
          "name": "isStandard",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "pricingTableLabel": {
          "name": "pricingTableLabel",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "yearlyPriceDiscountPercentage": {
          "name": "yearlyPriceDiscountPercentage",
          "type": "Decimal",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "hasTrial": {
          "name": "hasTrial",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "trialDays": {
          "name": "trialDays",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "organizations": {
          "name": "organizations",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": true
          },
          "attributes": []
        },
        "packagePayments": {
          "name": "packagePayments",
          "type": "PackagePayment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "PackagePayment",
            "isList": true
          },
          "attributes": []
        },
        "features": {
          "name": "features",
          "type": "PricingPackageFeature",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "PricingPackageFeature",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "PricingPackageFeature": {
      "name": "PricingPackageFeature",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "pricingPackageId": {
          "name": "pricingPackageId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "featureId": {
          "name": "featureId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "limitValue": {
          "name": "limitValue",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "feature": {
          "name": "feature",
          "type": "Feature",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Feature",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [featureId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "pricingPackage": {
          "name": "pricingPackage",
          "type": "PricingPackage",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "PricingPackage",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [pricingPackageId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "Role": {
      "name": "Role",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "features": {
          "name": "features",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isSystemRole": {
          "name": "isSystemRole",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "Metering": {
      "name": "Metering",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "featureName": {
          "name": "featureName",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "action": {
          "name": "action",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "metadata": {
          "name": "metadata",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        }
      }
    },
    "ApiKey": {
      "name": "ApiKey",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "keyPrefix": {
          "name": "keyPrefix",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "hashedKey": {
          "name": "hashedKey",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "permissions": {
          "name": "permissions",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "FacilityType": {
      "name": "FacilityType",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "type": {
          "name": "type",
          "type": "FacilityTypeEnum",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "country": {
          "name": "country",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "state": {
          "name": "state",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "complianceFramework": {
          "name": "complianceFramework",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "status": {
          "name": "status",
          "type": "FacilityTypeStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "ACTIVE"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "facilities": {
          "name": "facilities",
          "type": "Facility",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Facility",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "Facility": {
      "name": "Facility",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "facilityTypeId": {
          "name": "facilityTypeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "legalName": {
          "name": "legalName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "capacity": {
          "name": "capacity",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "state": {
          "name": "state",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "country": {
          "name": "country",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"USA\""
            }
          ]
        },
        "licenseNumber": {
          "name": "licenseNumber",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "licenseStatus": {
          "name": "licenseStatus",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "licenseExpiresAt": {
          "name": "licenseExpiresAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "addressLine1": {
          "name": "addressLine1",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "addressLine2": {
          "name": "addressLine2",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "city": {
          "name": "city",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "postalCode": {
          "name": "postalCode",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactPerson": {
          "name": "contactPerson",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactEmail": {
          "name": "contactEmail",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactPhone": {
          "name": "contactPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "FacilityStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "ACTIVE"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "facilityType": {
          "name": "facilityType",
          "type": "FacilityType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "FacilityType",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [facilityTypeId], references: [id]"
            }
          ]
        },
        "residents": {
          "name": "residents",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": true
          },
          "attributes": []
        },
        "taskDefinitions": {
          "name": "taskDefinitions",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": []
        },
        "taskOccurrences": {
          "name": "taskOccurrences",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": []
        },
        "taskDrafts": {
          "name": "taskDrafts",
          "type": "TaskDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDraft",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "DocumentationTracker": {
      "name": "DocumentationTracker",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modelName": {
          "name": "modelName",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "recordId": {
          "name": "recordId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "totalFields": {
          "name": "totalFields",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "capturedFields": {
          "name": "capturedFields",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completionRate": {
          "name": "completionRate",
          "type": "Float",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "actualRecords": {
          "name": "actualRecords",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cadenceType": {
          "name": "cadenceType",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "coverageRate": {
          "name": "coverageRate",
          "type": "Float",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "currentStreak": {
          "name": "currentStreak",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "eventTracked": {
          "name": "eventTracked",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "expectedRecords": {
          "name": "expectedRecords",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "intervalDays": {
          "name": "intervalDays",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "lastRecordedAt": {
          "name": "lastRecordedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "longestGapDays": {
          "name": "longestGapDays",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "minimumRecords": {
          "name": "minimumRecords",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "trackCompletionTime": {
          "name": "trackCompletionTime",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        }
      }
    },
    "Resident": {
      "name": "Resident",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "facilityId": {
          "name": "facilityId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "fullName": {
          "name": "fullName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "preferredName": {
          "name": "preferredName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "acesId": {
          "name": "acesId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "adsaId": {
          "name": "adsaId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "externalRef": {
          "name": "externalRef",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "ResidentStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "ACTIVE"
            }
          ]
        },
        "intakeStatus": {
          "name": "intakeStatus",
          "type": "ResidentIntakeStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "dateOfBirth": {
          "name": "dateOfBirth",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "demographics": {
          "name": "demographics",
          "type": "ResidentDemographics",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentDemographics",
            "isList": false
          },
          "attributes": []
        },
        "behaviorDailyLogs": {
          "name": "behaviorDailyLogs",
          "type": "BehaviorDailyLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLog",
            "isList": true
          },
          "attributes": []
        },
        "behaviorEpisodes": {
          "name": "behaviorEpisodes",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": true
          },
          "attributes": []
        },
        "careDeliveries": {
          "name": "careDeliveries",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": true
          },
          "attributes": []
        },
        "carePlans": {
          "name": "carePlans",
          "type": "CarePlan",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": true
          },
          "attributes": []
        },
        "assessments": {
          "name": "assessments",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": true
          },
          "attributes": []
        },
        "closures": {
          "name": "closures",
          "type": "ResidentClosure",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentClosure",
            "isList": true
          },
          "attributes": []
        },
        "contacts": {
          "name": "contacts",
          "type": "ResidentContact",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentContact",
            "isList": true
          },
          "attributes": []
        },
        "collateralContacts": {
          "name": "collateralContacts",
          "type": "ResidentCollateralContact",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentCollateralContact",
            "isList": true
          },
          "attributes": []
        },
        "emergencyEvacuation": {
          "name": "emergencyEvacuation",
          "type": "ResidentEmergencyEvacuation",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentEmergencyEvacuation",
            "isList": false
          },
          "attributes": []
        },
        "personalContext": {
          "name": "personalContext",
          "type": "ResidentPersonalContext",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentPersonalContext",
            "isList": false
          },
          "attributes": []
        },
        "preferences": {
          "name": "preferences",
          "type": "ResidentPreference",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentPreference",
            "isList": true
          },
          "attributes": []
        },
        "representatives": {
          "name": "representatives",
          "type": "ResidentRepresentative",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentRepresentative",
            "isList": true
          },
          "attributes": []
        },
        "reviews": {
          "name": "reviews",
          "type": "ResidentReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentReview",
            "isList": true
          },
          "attributes": []
        },
        "facility": {
          "name": "facility",
          "type": "Facility",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Facility",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [facilityId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "safetyCommunication": {
          "name": "safetyCommunication",
          "type": "ResidentSafetyCommunication",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentSafetyCommunication",
            "isList": true
          },
          "attributes": []
        },
        "ncpResidentOverview": {
          "name": "ncpResidentOverview",
          "type": "NCPResidentOverview",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentOverview",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentSafetyCommunication": {
          "name": "ncpResidentSafetyCommunication",
          "type": "NCPResidentSafetyCommunication",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentSafetyCommunication",
            "isList": false
          },
          "attributes": []
        },
        "ncpResponsiblePartyContacts": {
          "name": "ncpResponsiblePartyContacts",
          "type": "NCPResponsiblePartyContact",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResponsiblePartyContact",
            "isList": true
          },
          "attributes": []
        },
        "ncpResidentEmergencyEvacuation": {
          "name": "ncpResidentEmergencyEvacuation",
          "type": "NCPResidentEmergencyEvacuation",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentEmergencyEvacuation",
            "isList": false
          },
          "attributes": []
        },
        "healthMedicals": {
          "name": "healthMedicals",
          "type": "ResidentHealthMedical",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentHealthMedical",
            "isList": true
          },
          "attributes": []
        },
        "healthMedicalTreatment": {
          "name": "healthMedicalTreatment",
          "type": "ResidentHealthMedicalTreatment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentHealthMedicalTreatment",
            "isList": true
          },
          "attributes": []
        },
        "conditions": {
          "name": "conditions",
          "type": "ResidentCondition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentCondition",
            "isList": true
          },
          "attributes": []
        },
        "behaviours": {
          "name": "behaviours",
          "type": "ResidentBehaviour",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentBehaviour",
            "isList": true
          },
          "attributes": []
        },
        "comments": {
          "name": "comments",
          "type": "ResidentComments",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentComments",
            "isList": true
          },
          "attributes": []
        },
        "ncpResidentMedicationOverview": {
          "name": "ncpResidentMedicationOverview",
          "type": "NCPResidentMedicationOverview",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentMedicationOverview",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentLegalDocumentsSpecialtyNeeds": {
          "name": "ncpResidentLegalDocumentsSpecialtyNeeds",
          "type": "NCPResidentLegalDocumentsSpecialtyNeeds",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentLegalDocumentsSpecialtyNeeds",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentMedicationManagement": {
          "name": "ncpResidentMedicationManagement",
          "type": "NCPResidentMedicationManagement",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentMedicationManagement",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentHealthIndicators": {
          "name": "ncpResidentHealthIndicators",
          "type": "NCPResidentHealthIndicators",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentHealthIndicators",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentTreatments": {
          "name": "ncpResidentTreatments",
          "type": "NCPResidentTreatments",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentTreatments",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentPrograms": {
          "name": "ncpResidentPrograms",
          "type": "NCPResidentPrograms",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentPrograms",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentTreatmentRefusalPlan": {
          "name": "ncpResidentTreatmentRefusalPlan",
          "type": "NCPResidentTreatmentRefusalPlan",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentTreatmentRefusalPlan",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentPsychSocialCognitive": {
          "name": "ncpResidentPsychSocialCognitive",
          "type": "NCPResidentPsychSocialCognitive",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentPsychSocialCognitive",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentUniversalPrecautions": {
          "name": "ncpResidentUniversalPrecautions",
          "type": "NCPResidentUniversalPrecautions",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentUniversalPrecautions",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentADL": {
          "name": "ncpResidentADL",
          "type": "NCPResidentADL",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentADL",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentIADL": {
          "name": "ncpResidentIADL",
          "type": "NCPResidentIADL",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentIADL",
            "isList": false
          },
          "attributes": []
        },
        "ncpResidentNCPReviewApproval": {
          "name": "ncpResidentNCPReviewApproval",
          "type": "NCPResidentNCPReviewApproval",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPReviewApproval",
            "isList": false
          },
          "attributes": []
        },
        "residentIndependenceImprovement": {
          "name": "residentIndependenceImprovement",
          "type": "ResidentIndependenceImprovement",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentIndependenceImprovement",
            "isList": false
          },
          "attributes": []
        },
        "residentIadl": {
          "name": "residentIadl",
          "type": "ResidentIADL",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentIADL",
            "isList": false
          },
          "attributes": []
        },
        "providerInformation": {
          "name": "providerInformation",
          "type": "ResidentProviderInformation",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentProviderInformation",
            "isList": false
          },
          "attributes": []
        },
        "definitions": {
          "name": "definitions",
          "type": "ResidentDefinitions",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentDefinitions",
            "isList": false
          },
          "attributes": []
        },
        "taskDefinitions": {
          "name": "taskDefinitions",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": []
        },
        "taskOccurrences": {
          "name": "taskOccurrences",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": []
        },
        "taskDrafts": {
          "name": "taskDrafts",
          "type": "TaskDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDraft",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "ResidentContact": {
      "name": "ResidentContact",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactType": {
          "name": "contactType",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "label": {
          "name": "label",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "value": {
          "name": "value",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isPrimary": {
          "name": "isPrimary",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "isEmergency": {
          "name": "isEmergency",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentCollateralContact": {
      "name": "ResidentCollateralContact",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relationship": {
          "name": "relationship",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "role": {
          "name": "role",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "phone": {
          "name": "phone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "email": {
          "name": "email",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "ncpDevelopmentParticipations": {
          "name": "ncpDevelopmentParticipations",
          "type": "NCPResidentNCPDevelopmentParticipant",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPDevelopmentParticipant",
            "isList": true
          },
          "attributes": []
        },
        "ncpApprovals": {
          "name": "ncpApprovals",
          "type": "NCPResidentNCPApproval",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPApproval",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "ResidentEmergencyEvacuation": {
      "name": "ResidentEmergencyEvacuation",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "afhEvacuationLevel": {
          "name": "afhEvacuationLevel",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caregiverSafetyConcerns": {
          "name": "caregiverSafetyConcerns",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentIndependenceImprovement": {
      "name": "ResidentIndependenceImprovement",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "functionalLimitations": {
          "name": "functionalLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "daysOutPerWeek": {
          "name": "daysOutPerWeek",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "changeVs90Days": {
          "name": "changeVs90Days",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "improvementPotential": {
          "name": "improvementPotential",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "taskSegmentationNeeded": {
          "name": "taskSegmentationNeeded",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "adjustsEasilyToRoutineChange": {
          "name": "adjustsEasilyToRoutineChange",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "routineChangeComments": {
          "name": "routineChangeComments",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "universalPrecautions": {
          "name": "universalPrecautions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activities": {
          "name": "activities",
          "type": "ResidentADLActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentADLActivity",
            "isList": true
          },
          "attributes": []
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentADLActivity": {
      "name": "ResidentADLActivity",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "adlId": {
          "name": "adlId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityName": {
          "name": "activityName",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityOrder": {
          "name": "activityOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "selfPerformanceAndSupport": {
          "name": "selfPerformanceAndSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "ongoingLevelOfSupport": {
          "name": "ongoingLevelOfSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "statusAndAssistanceAvailable": {
          "name": "statusAndAssistanceAvailable",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "clientLimitations": {
          "name": "clientLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverInstructions": {
          "name": "caregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "provider": {
          "name": "provider",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "equipment": {
          "name": "equipment",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "continenceBladderControl": {
          "name": "continenceBladderControl",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "continenceBowelControl": {
          "name": "continenceBowelControl",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "continenceBowelPattern": {
          "name": "continenceBowelPattern",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "continenceAppliances": {
          "name": "continenceAppliances",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "continenceIndividualManagement": {
          "name": "continenceIndividualManagement",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "positioningInBedDos": {
          "name": "positioningInBedDos",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "positioningInBedDonts": {
          "name": "positioningInBedDonts",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "positioningInBedReport": {
          "name": "positioningInBedReport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareBowelBladderDos": {
          "name": "skinCareBowelBladderDos",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareBowelBladderDonts": {
          "name": "skinCareBowelBladderDonts",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareBowelBladderReport": {
          "name": "skinCareBowelBladderReport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCareNeeds": {
          "name": "footCareNeeds",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toenailTrimmingReceivedLast90Days": {
          "name": "toenailTrimmingReceivedLast90Days",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toenailTrimmingFutureAssistance": {
          "name": "toenailTrimmingFutureAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toenailTrimmingPaidCaregiver": {
          "name": "toenailTrimmingPaidCaregiver",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "specificSkinCareDos": {
          "name": "specificSkinCareDos",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "specificSkinCareDonts": {
          "name": "specificSkinCareDonts",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "specificSkinCareReport": {
          "name": "specificSkinCareReport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinProblems": {
          "name": "skinProblems",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinCareOther": {
          "name": "skinCareOther",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pressureInjuriesStatus": {
          "name": "pressureInjuriesStatus",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "numberOfCurrentPressureInjuries": {
          "name": "numberOfCurrentPressureInjuries",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinInjuryResolvedLastYear": {
          "name": "skinInjuryResolvedLastYear",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinFootProblemsDetails": {
          "name": "skinFootProblemsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "looseContent": {
          "name": "looseContent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "adl": {
          "name": "adl",
          "type": "ResidentIndependenceImprovement",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentIndependenceImprovement",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [adlId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentIADL": {
      "name": "ResidentIADL",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "dietAdhereTo": {
          "name": "dietAdhereTo",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "activities": {
          "name": "activities",
          "type": "ResidentIADLActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentIADLActivity",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "ResidentIADLActivity": {
      "name": "ResidentIADLActivity",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "iadlId": {
          "name": "iadlId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityName": {
          "name": "activityName",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityOrder": {
          "name": "activityOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caregiverInstructions": {
          "name": "caregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "nutritionalProblems": {
          "name": "nutritionalProblems",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "oralHygieneDentalProblems": {
          "name": "oralHygieneDentalProblems",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "nutritionalApproaches": {
          "name": "nutritionalApproaches",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "specificDietDos": {
          "name": "specificDietDos",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "specificDietReport": {
          "name": "specificDietReport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "wantsToParticipate": {
          "name": "wantsToParticipate",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "needsAssistanceToParticipate": {
          "name": "needsAssistanceToParticipate",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caregiverSupportedActivities": {
          "name": "caregiverSupportedActivities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "looseContent": {
          "name": "looseContent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "iadl": {
          "name": "iadl",
          "type": "ResidentIADL",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentIADL",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [iadlId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentProviderInformation": {
      "name": "ResidentProviderInformation",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "provider": {
          "name": "provider",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "providerPhone": {
          "name": "providerPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assignedTasks": {
          "name": "assignedTasks",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentDefinitions": {
      "name": "ResidentDefinitions",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "adlIndependent": {
          "name": "adlIndependent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlSupervision": {
          "name": "adlSupervision",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLimitedAssistance": {
          "name": "adlLimitedAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlExtensiveAssistance": {
          "name": "adlExtensiveAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTotal": {
          "name": "adlTotal",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlActivityDidNotOccurNoProvider": {
          "name": "adlActivityDidNotOccurNoProvider",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlActivityDidNotOccurClientNotAble": {
          "name": "adlActivityDidNotOccurClientNotAble",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlActivityDidNotOccurClientDeclined": {
          "name": "adlActivityDidNotOccurClientDeclined",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSummaryIndependent": {
          "name": "iadlSummaryIndependent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSummaryAssistance": {
          "name": "iadlSummaryAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSummaryActivityDidNotOccur": {
          "name": "iadlSummaryActivityDidNotOccur",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlIndependent": {
          "name": "iadlIndependent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSetUpHelpOnly": {
          "name": "iadlSetUpHelpOnly",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlLimitedAssistance": {
          "name": "iadlLimitedAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlExtensiveAssistance": {
          "name": "iadlExtensiveAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlTotalDependence": {
          "name": "iadlTotalDependence",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlActivityDidNotOccur": {
          "name": "iadlActivityDidNotOccur",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentPreference": {
      "name": "ResidentPreference",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "preference": {
          "name": "preference",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicOfInterestCategory": {
          "name": "topicOfInterestCategory",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicOfInterestSubcategory": {
          "name": "topicOfInterestSubcategory",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicOfInterestRelatedTo": {
          "name": "topicOfInterestRelatedTo",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentPersonalContext": {
      "name": "ResidentPersonalContext",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "background": {
          "name": "background",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "history": {
          "name": "history",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "lifestyle": {
          "name": "lifestyle",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interests": {
          "name": "interests",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relationships": {
          "name": "relationships",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "goals": {
          "name": "goals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "strengths": {
          "name": "strengths",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentRepresentative": {
      "name": "ResidentRepresentative",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relationship": {
          "name": "relationship",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactEmail": {
          "name": "contactEmail",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactPhone": {
          "name": "contactPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "addressLine1": {
          "name": "addressLine1",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "addressLine2": {
          "name": "addressLine2",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "city": {
          "name": "city",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "state": {
          "name": "state",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "postalCode": {
          "name": "postalCode",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "authorityType": {
          "name": "authorityType",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isPrimary": {
          "name": "isPrimary",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "isEmergency": {
          "name": "isEmergency",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "carePlanningRole": {
          "name": "carePlanningRole",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notificationNotes": {
          "name": "notificationNotes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessments": {
          "name": "assessments",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": true
          },
          "attributes": []
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        }
      }
    },
    "ResidentSafetyCommunication": {
      "name": "ResidentSafetyCommunication",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessmentId": {
          "name": "assessmentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "modesOfExpression": {
          "name": "modesOfExpression",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearing": {
          "name": "hearing",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "speechHearingEquipment": {
          "name": "speechHearingEquipment",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "abilityToSee": {
          "name": "abilityToSee",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionLimitations": {
          "name": "visionLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionEquipment": {
          "name": "visionEquipment",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "paceRecord": {
          "name": "paceRecord",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "assessment": {
          "name": "assessment",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [assessmentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentHealthMedical": {
      "name": "ResidentHealthMedical",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "diagnosis": {
          "name": "diagnosis",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "healthIndicators": {
          "name": "healthIndicators",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "isClientComatose": {
          "name": "isClientComatose",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medications": {
          "name": "medications",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "whatAreTheRoutes": {
          "name": "whatAreTheRoutes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "atMostHowManyTimesPerDayDoesTheClientTakeMedications": {
          "name": "atMostHowManyTimesPerDayDoesTheClientTakeMedications",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "describesTheAmountOfAssistanceIfAnyRequiredToReceivePrescriptionMedicationsOverTheCounterMedicationsOrHerbalSupplements": {
          "name": "describesTheAmountOfAssistanceIfAnyRequiredToReceivePrescriptionMedicationsOverTheCounterMedicationsOrHerbalSupplements",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "selfAdministration": {
          "name": "selfAdministration",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "frequencyOfNeed": {
          "name": "frequencyOfNeed",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "clientLimitations": {
          "name": "clientLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverInstructions": {
          "name": "caregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "provider": {
          "name": "provider",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caregiverInstructionsComment": {
          "name": "caregiverInstructionsComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "painSite": {
          "name": "painSite",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "frequencyWithWhichClientComplainsOrShowsEvidenceOfPain": {
          "name": "frequencyWithWhichClientComplainsOrShowsEvidenceOfPain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "painManagement": {
          "name": "painManagement",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "impact": {
          "name": "impact",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medicalAdditionalDetails": {
          "name": "medicalAdditionalDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "height": {
          "name": "height",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "weight": {
          "name": "weight",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "bodyMassIndex": {
          "name": "bodyMassIndex",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "weightLoss": {
          "name": "weightLoss",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "or10PercentInLast180DaysWeightLoss": {
          "name": "or10PercentInLast180DaysWeightLoss",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "weightGain": {
          "name": "weightGain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "or10PercentInLast180DaysWeightGain": {
          "name": "or10PercentInLast180DaysWeightGain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "inGeneralHowWouldYouRateYourHealth": {
          "name": "inGeneralHowWouldYouRateYourHealth",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dateOfLastDoctorVisit": {
          "name": "dateOfLastDoctorVisit",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "doctorName": {
          "name": "doctorName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "comment": {
          "name": "comment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "allergy": {
          "name": "allergy",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "allergiesReactionsAndImmediateCareNeeds": {
          "name": "allergiesReactionsAndImmediateCareNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id]"
            }
          ]
        }
      }
    },
    "ResidentHealthMedicalTreatment": {
      "name": "ResidentHealthMedicalTreatment",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1Type": {
          "name": "treatment1Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1Name": {
          "name": "treatment1Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1Providers": {
          "name": "treatment1Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1MonitoringComment": {
          "name": "treatment1MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment2Type": {
          "name": "treatment2Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment2Name": {
          "name": "treatment2Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment2Providers": {
          "name": "treatment2Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment2MonitoringComment": {
          "name": "treatment2MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment3Type": {
          "name": "treatment3Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment3Name": {
          "name": "treatment3Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment3Providers": {
          "name": "treatment3Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment3MonitoringComment": {
          "name": "treatment3MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment4Type": {
          "name": "treatment4Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment4Name": {
          "name": "treatment4Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment4Providers": {
          "name": "treatment4Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment4MonitoringComment": {
          "name": "treatment4MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment5Type": {
          "name": "treatment5Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment5Name": {
          "name": "treatment5Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment5Providers": {
          "name": "treatment5Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment5MonitoringComment": {
          "name": "treatment5MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment6Type": {
          "name": "treatment6Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment6Name": {
          "name": "treatment6Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment6Providers": {
          "name": "treatment6Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment6MonitoringComment": {
          "name": "treatment6MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment7Type": {
          "name": "treatment7Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment7Name": {
          "name": "treatment7Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment7Providers": {
          "name": "treatment7Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment7MonitoringComment": {
          "name": "treatment7MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment8Type": {
          "name": "treatment8Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment8Name": {
          "name": "treatment8Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment8Providers": {
          "name": "treatment8Providers",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment8MonitoringComment": {
          "name": "treatment8MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleepCarePlanning": {
          "name": "sleepCarePlanning",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleepSatisfaction": {
          "name": "sleepSatisfaction",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sleepNarrative": {
          "name": "sleepNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryShortTermLoss": {
          "name": "memoryShortTermLoss",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "memoryLongTermLoss": {
          "name": "memoryLongTermLoss",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "memoryCaregiverInstructions": {
          "name": "memoryCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryOrientedToPerson": {
          "name": "memoryOrientedToPerson",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "memoryNarrative": {
          "name": "memoryNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cognitiveExpressive": {
          "name": "cognitiveExpressive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cognitiveReceptive": {
          "name": "cognitiveReceptive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "decisionsDescription": {
          "name": "decisionsDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior1Name": {
          "name": "behavior1Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior1Description": {
          "name": "behavior1Description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior1Frequency": {
          "name": "behavior1Frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior1Alterability": {
          "name": "behavior1Alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior1PersonalizedInterventions": {
          "name": "behavior1PersonalizedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior2Name": {
          "name": "behavior2Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior2Description": {
          "name": "behavior2Description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior2Frequency": {
          "name": "behavior2Frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior2Alterability": {
          "name": "behavior2Alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior2PersonalizedInterventions": {
          "name": "behavior2PersonalizedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior3Name": {
          "name": "behavior3Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior3Description": {
          "name": "behavior3Description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior3Frequency": {
          "name": "behavior3Frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior3Alterability": {
          "name": "behavior3Alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior3PersonalizedInterventions": {
          "name": "behavior3PersonalizedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cbhsReferralMade": {
          "name": "cbhsReferralMade",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cbhsReasonNotReferred": {
          "name": "cbhsReasonNotReferred",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cbhsOtherReason": {
          "name": "cbhsOtherReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "depressionNarrative": {
          "name": "depressionNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentCondition": {
      "name": "ResidentCondition",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessmentId": {
          "name": "assessmentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "medicationsRoutes": {
          "name": "medicationsRoutes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsMaxFrequency": {
          "name": "medicationsMaxFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsContent": {
          "name": "medicationsContent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsManagementDescription": {
          "name": "medicationsManagementDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsSelfAdministration": {
          "name": "medicationsSelfAdministration",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsFrequencyOfNeed": {
          "name": "medicationsFrequencyOfNeed",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsClientLimitations": {
          "name": "medicationsClientLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsCaregiverInstructions": {
          "name": "medicationsCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationsAdministrationDescription": {
          "name": "medicationsAdministrationDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleepCarePlanning": {
          "name": "sleepCarePlanning",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleepSatisfaction": {
          "name": "sleepSatisfaction",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleepDescription": {
          "name": "sleepDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryShortTermMemoryLoss": {
          "name": "memoryShortTermMemoryLoss",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryLongTermMemoryLoss": {
          "name": "memoryLongTermMemoryLoss",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryCaregiverInstructions": {
          "name": "memoryCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryOrientedToPerson": {
          "name": "memoryOrientedToPerson",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryDescription": {
          "name": "memoryDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cognitiveComprehensionExpressive": {
          "name": "cognitiveComprehensionExpressive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cognitiveComprehensionReceptive": {
          "name": "cognitiveComprehensionReceptive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cognitiveDecisionsDescription": {
          "name": "cognitiveDecisionsDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cognitiveDescription": {
          "name": "cognitiveDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cbhsReferralMade": {
          "name": "cbhsReferralMade",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cbhsReasonNotReferred": {
          "name": "cbhsReasonNotReferred",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cbhsOtherReason": {
          "name": "cbhsOtherReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cbhsDescription": {
          "name": "cbhsDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "depressionDescription": {
          "name": "depressionDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlFunctionalLimitations": {
          "name": "adlFunctionalLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDaysOutPerWeek": {
          "name": "adlDaysOutPerWeek",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlSelfSufficiencyChange": {
          "name": "adlSelfSufficiencyChange",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlImprovedFunctionPotential": {
          "name": "adlImprovedFunctionPotential",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTaskSegmentation": {
          "name": "adlTaskSegmentation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlAdjustToRoutineChange": {
          "name": "adlAdjustToRoutineChange",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDescription": {
          "name": "adlDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlWalkInRoomNarrative": {
          "name": "adlWalkInRoomNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlWalkInRoomSelfPerformance": {
          "name": "adlWalkInRoomSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlWalkInRoomDescription": {
          "name": "adlWalkInRoomDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionInRoomNarrative": {
          "name": "adlLocomotionInRoomNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionInRoomSelfPerformance": {
          "name": "adlLocomotionInRoomSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionInRoomStatusAssistance": {
          "name": "adlLocomotionInRoomStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionInRoomCaregiverInstructions": {
          "name": "adlLocomotionInRoomCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionInRoomDescription": {
          "name": "adlLocomotionInRoomDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionOutsideNarrative": {
          "name": "adlLocomotionOutsideNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionOutsideSelfPerformance": {
          "name": "adlLocomotionOutsideSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionOutsideStatusAssistance": {
          "name": "adlLocomotionOutsideStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionOutsideCaregiverInstructions": {
          "name": "adlLocomotionOutsideCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlLocomotionOutsideDescription": {
          "name": "adlLocomotionOutsideDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilityNarrative": {
          "name": "adlBedMobilityNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilitySelfPerformance": {
          "name": "adlBedMobilitySelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilityOngoingLevelOfSupport": {
          "name": "adlBedMobilityOngoingLevelOfSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilityStatusAssistance": {
          "name": "adlBedMobilityStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilityClientLimitations": {
          "name": "adlBedMobilityClientLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilityCaregiverInstructions": {
          "name": "adlBedMobilityCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBedMobilityDescription": {
          "name": "adlBedMobilityDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTransferNarrative": {
          "name": "adlTransferNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTransferSelfPerformance": {
          "name": "adlTransferSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTransferOngoingLevelOfSupport": {
          "name": "adlTransferOngoingLevelOfSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTransferStatusAssistance": {
          "name": "adlTransferStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTransferCaregiverInstructions": {
          "name": "adlTransferCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlTransferDescription": {
          "name": "adlTransferDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlEatingNarrative": {
          "name": "adlEatingNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlEatingSelfPerformance": {
          "name": "adlEatingSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlEatingStatusAssistance": {
          "name": "adlEatingStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlEatingClientLimitations": {
          "name": "adlEatingClientLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlEatingCaregiverInstructions": {
          "name": "adlEatingCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlEatingDescription": {
          "name": "adlEatingDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlToiletUseNarrative": {
          "name": "adlToiletUseNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlToiletUseSelfPerformance": {
          "name": "adlToiletUseSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlToiletUseOngoingLevelOfSupport": {
          "name": "adlToiletUseOngoingLevelOfSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlToiletUseStatusAssistance": {
          "name": "adlToiletUseStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlToiletUseCaregiverInstructions": {
          "name": "adlToiletUseCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlToiletUseDescription": {
          "name": "adlToiletUseDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDressingNarrative": {
          "name": "adlDressingNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDressingSelfPerformance": {
          "name": "adlDressingSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDressingStatusAssistance": {
          "name": "adlDressingStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDressingCaregiverInstructions": {
          "name": "adlDressingCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlDressingDescription": {
          "name": "adlDressingDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlPersonalHygieneNarrative": {
          "name": "adlPersonalHygieneNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlPersonalHygieneSelfPerformance": {
          "name": "adlPersonalHygieneSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlPersonalHygieneStatusAssistance": {
          "name": "adlPersonalHygieneStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlPersonalHygieneCaregiverInstructions": {
          "name": "adlPersonalHygieneCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlPersonalHygieneDescription": {
          "name": "adlPersonalHygieneDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBathingNarrative": {
          "name": "adlBathingNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBathingSelfPerformance": {
          "name": "adlBathingSelfPerformance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBathingOngoingLevelOfSupport": {
          "name": "adlBathingOngoingLevelOfSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBathingStatusAssistance": {
          "name": "adlBathingStatusAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBathingCaregiverInstructions": {
          "name": "adlBathingCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "adlBathingDescription": {
          "name": "adlBathingDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "continenceBladderControl": {
          "name": "continenceBladderControl",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "continenceBowelControl": {
          "name": "continenceBowelControl",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "continenceBowelPattern": {
          "name": "continenceBowelPattern",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "continenceAppliancesPrograms": {
          "name": "continenceAppliancesPrograms",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "continenceIndividualManagement": {
          "name": "continenceIndividualManagement",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "continenceDescription": {
          "name": "continenceDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCareToenailAssistanceLast90Days": {
          "name": "footCareToenailAssistanceLast90Days",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCareToenailAssistanceFuture": {
          "name": "footCareToenailAssistanceFuture",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCarePaidCaregiverToenailTask": {
          "name": "footCarePaidCaregiverToenailTask",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCareDescription": {
          "name": "footCareDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareNumberOfPressureInjuries": {
          "name": "skinCareNumberOfPressureInjuries",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareInjuryResolvedLastYear": {
          "name": "skinCareInjuryResolvedLastYear",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareDescription": {
          "name": "skinCareDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlMealPreparationInstructions": {
          "name": "iadlMealPreparationInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlNutritionalProblems": {
          "name": "iadlNutritionalProblems",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlOralHygieneProblems": {
          "name": "iadlOralHygieneProblems",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlDescription": {
          "name": "iadlDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSpecificDietInstructionsIntro": {
          "name": "iadlSpecificDietInstructionsIntro",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSpecificDietInstructionsDos": {
          "name": "iadlSpecificDietInstructionsDos",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlSpecificDietInstructionsReport": {
          "name": "iadlSpecificDietInstructionsReport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlOrdinaryHouseworkDescription": {
          "name": "iadlOrdinaryHouseworkDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlOrdinaryHouseworkCaregiverInstructions": {
          "name": "iadlOrdinaryHouseworkCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlEssentialShoppingDescription": {
          "name": "iadlEssentialShoppingDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlEssentialShoppingCaregiverInstructions": {
          "name": "iadlEssentialShoppingCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlTransportationDescription": {
          "name": "iadlTransportationDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "iadlTransportationCaregiverInstructions": {
          "name": "iadlTransportationCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "communityIntegrationWantsActivities": {
          "name": "communityIntegrationWantsActivities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "communityIntegrationNeedsAssistance": {
          "name": "communityIntegrationNeedsAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "communityIntegrationSupportedActivities": {
          "name": "communityIntegrationSupportedActivities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "providerSchedulingPreferenceDescription": {
          "name": "providerSchedulingPreferenceDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "providerName": {
          "name": "providerName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "providerPhone": {
          "name": "providerPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "providerAssignedTasks": {
          "name": "providerAssignedTasks",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlIndependent": {
          "name": "definitionsAdlIndependent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlSupervision": {
          "name": "definitionsAdlSupervision",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlLimitedAssistance": {
          "name": "definitionsAdlLimitedAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlExtensiveAssistance": {
          "name": "definitionsAdlExtensiveAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlTotal": {
          "name": "definitionsAdlTotal",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlDidNotOccurNoProvider": {
          "name": "definitionsAdlDidNotOccurNoProvider",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlDidNotOccurClientNotAble": {
          "name": "definitionsAdlDidNotOccurClientNotAble",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsAdlDidNotOccurClientDeclined": {
          "name": "definitionsAdlDidNotOccurClientDeclined",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlIndependentDefinition": {
          "name": "definitionsIadlIndependentDefinition",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlAssistanceDefinition": {
          "name": "definitionsIadlAssistanceDefinition",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlDidNotOccurDefinition": {
          "name": "definitionsIadlDidNotOccurDefinition",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlIndependent": {
          "name": "definitionsIadlIndependent",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlSetupHelp": {
          "name": "definitionsIadlSetupHelp",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlLimitedAssistance": {
          "name": "definitionsIadlLimitedAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlExtensiveAssistance": {
          "name": "definitionsIadlExtensiveAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlTotalDependence": {
          "name": "definitionsIadlTotalDependence",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "definitionsIadlActivityDidNotOccur": {
          "name": "definitionsIadlActivityDidNotOccur",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "assessment": {
          "name": "assessment",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [assessmentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentBehaviour": {
      "name": "ResidentBehaviour",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessmentId": {
          "name": "assessmentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "position": {
          "name": "position",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "frequency": {
          "name": "frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "alterability": {
          "name": "alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "personalisedInterventions": {
          "name": "personalisedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "content": {
          "name": "content",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "assessment": {
          "name": "assessment",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [assessmentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentComments": {
      "name": "ResidentComments",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessmentId": {
          "name": "assessmentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sectionKey": {
          "name": "sectionKey",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "subsectionKey": {
          "name": "subsectionKey",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "content": {
          "name": "content",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "assessment": {
          "name": "assessment",
          "type": "ResidentAssessment",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [assessmentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentDemographics": {
      "name": "ResidentDemographics",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "fullName": {
          "name": "fullName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "acesId": {
          "name": "acesId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessorName": {
          "name": "assessorName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManager": {
          "name": "caseManager",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "office": {
          "name": "office",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessmentDate": {
          "name": "assessmentDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reasonForAssessment": {
          "name": "reasonForAssessment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "primarySourceOfInformation": {
          "name": "primarySourceOfInformation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherSourcesOfInformation": {
          "name": "otherSourcesOfInformation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skillsAndGifts": {
          "name": "skillsAndGifts",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relationshipsAndInterests": {
          "name": "relationshipsAndInterests",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "supportPreferences": {
          "name": "supportPreferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "favouriteThings": {
          "name": "favouriteThings",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "spiritualCulturalPreferences": {
          "name": "spiritualCulturalPreferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nextYearGoal": {
          "name": "nextYearGoal",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicOfInterestCategory": {
          "name": "topicOfInterestCategory",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicOfInterestSubcategory": {
          "name": "topicOfInterestSubcategory",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicOfInterestRelatedTo": {
          "name": "topicOfInterestRelatedTo",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "strengths": {
          "name": "strengths",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "preferences": {
          "name": "preferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdById": {
          "name": "createdById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "updatedById": {
          "name": "updatedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "createdBy": {
          "name": "createdBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentDemographicsCreator\", fields: [createdById], references: [id]"
            }
          ]
        },
        "updatedBy": {
          "name": "updatedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentDemographicsUpdater\", fields: [updatedById], references: [id]"
            }
          ]
        }
      }
    },
    "ResidentAssessment": {
      "name": "ResidentAssessment",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessmentType": {
          "name": "assessmentType",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "AssessmentStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "IN_PROGRESS"
            }
          ]
        },
        "assessmentDate": {
          "name": "assessmentDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedById": {
          "name": "completedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "datePrinted": {
          "name": "datePrinted",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assessorName": {
          "name": "assessorName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManager": {
          "name": "caseManager",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "office": {
          "name": "office",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reasonForAssessment": {
          "name": "reasonForAssessment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "primarySourceOfInformation": {
          "name": "primarySourceOfInformation",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherSourcesOfInformation": {
          "name": "otherSourcesOfInformation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentInput": {
          "name": "residentInput",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "representativeInput": {
          "name": "representativeInput",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "representativeId": {
          "name": "representativeId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activities": {
          "name": "activities",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "allergies": {
          "name": "allergies",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavioral": {
          "name": "behavioral",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cognition": {
          "name": "cognition",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "communication": {
          "name": "communication",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "functionalNeeds": {
          "name": "functionalNeeds",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "health": {
          "name": "health",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medications": {
          "name": "medications",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "mobility": {
          "name": "mobility",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nutrition": {
          "name": "nutrition",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherNeeds": {
          "name": "otherNeeds",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "psychosocial": {
          "name": "psychosocial",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "safety": {
          "name": "safety",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "identifiedNeeds": {
          "name": "identifiedNeeds",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "preferences": {
          "name": "preferences",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "proposedServices": {
          "name": "proposedServices",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "refusalResponses": {
          "name": "refusalResponses",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "refusedServices": {
          "name": "refusedServices",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentGoals": {
          "name": "residentGoals",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdById": {
          "name": "createdById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "updatedById": {
          "name": "updatedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "informedVersions": {
          "name": "informedVersions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": []
        },
        "completedBy": {
          "name": "completedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"AssessmentCompleter\", fields: [completedById], references: [id]"
            }
          ]
        },
        "createdBy": {
          "name": "createdBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"AssessmentCreator\", fields: [createdById], references: [id]"
            }
          ]
        },
        "representative": {
          "name": "representative",
          "type": "ResidentRepresentative",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentRepresentative",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [representativeId], references: [id]"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "updatedBy": {
          "name": "updatedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"AssessmentUpdater\", fields: [updatedById], references: [id]"
            }
          ]
        },
        "closures": {
          "name": "closures",
          "type": "ResidentClosure",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentClosure",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ClosureFinalAssessment\""
            }
          ]
        },
        "safetyCommunication": {
          "name": "safetyCommunication",
          "type": "ResidentSafetyCommunication",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentSafetyCommunication",
            "isList": false
          },
          "attributes": []
        },
        "condition": {
          "name": "condition",
          "type": "ResidentCondition",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentCondition",
            "isList": false
          },
          "attributes": []
        },
        "behaviours": {
          "name": "behaviours",
          "type": "ResidentBehaviour",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentBehaviour",
            "isList": true
          },
          "attributes": []
        },
        "comments": {
          "name": "comments",
          "type": "ResidentComments",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentComments",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "NCPResidentOverview": {
      "name": "NCPResidentOverview",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "residentName": {
          "name": "residentName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dateOfBirth": {
          "name": "dateOfBirth",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "age": {
          "name": "age",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pronouns": {
          "name": "pronouns",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "providerName": {
          "name": "providerName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "primaryLanguage": {
          "name": "primaryLanguage",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "speaksEnglish": {
          "name": "speaksEnglish",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interpreterNeeded": {
          "name": "interpreterNeeded",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "allergiesSummary": {
          "name": "allergiesSummary",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "movedInDate": {
          "name": "movedInDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ncpDateStarted": {
          "name": "ncpDateStarted",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ncpDateCompleted": {
          "name": "ncpDateCompleted",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ncpDateDischarged": {
          "name": "ncpDateDischarged",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ncpStatus": {
          "name": "ncpStatus",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_overview_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentLegalDocumentsSpecialtyNeeds": {
      "name": "NCPResidentLegalDocumentsSpecialtyNeeds",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "noLegalDocuments": {
          "name": "noLegalDocuments",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "advancedDirectives": {
          "name": "advancedDirectives",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "polstForm": {
          "name": "polstForm",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherLegalDocuments": {
          "name": "otherLegalDocuments",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "noSpecialtyNeeds": {
          "name": "noSpecialtyNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dementia": {
          "name": "dementia",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "mentalHealth": {
          "name": "mentalHealth",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "developmentalDisability": {
          "name": "developmentalDisability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherSpecialtyNeeds": {
          "name": "otherSpecialtyNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        }
      }
    },
    "NCPResponsiblePartyContact": {
      "name": "NCPResponsiblePartyContact",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relationship": {
          "name": "relationship",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "role": {
          "name": "role",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "homeBusinessPhone": {
          "name": "homeBusinessPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cellPhoneFax": {
          "name": "cellPhoneFax",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "address": {
          "name": "address",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "email": {
          "name": "email",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "preferredContactMethod": {
          "name": "preferredContactMethod",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "NCPResidentEmergencyEvacuation": {
      "name": "NCPResidentEmergencyEvacuation",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "evacuationAssistanceRequired": {
          "name": "evacuationAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "evacuationAssistanceNotes": {
          "name": "evacuationAssistanceNotes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "residentEvacuationSafetyInstructions": {
          "name": "residentEvacuationSafetyInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverEvacuationInstructions": {
          "name": "caregiverEvacuationInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "safetySectionComments": {
          "name": "safetySectionComments",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        }
      }
    },
    "NCPResidentSafetyCommunication": {
      "name": "NCPResidentSafetyCommunication",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "modesOfExpression": {
          "name": "modesOfExpression",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modeOfExpressionProblems": {
          "name": "modeOfExpressionProblems",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modeOfExpressionProblemDescription": {
          "name": "modeOfExpressionProblemDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "speechHearingEquipment": {
          "name": "speechHearingEquipment",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "howResidentMakesSelfUnderstood": {
          "name": "howResidentMakesSelfUnderstood",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "howResidentUnderstandsOthers": {
          "name": "howResidentUnderstandsOthers",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modesOfExpressionStrengthsAndAbilities": {
          "name": "modesOfExpressionStrengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modesOfExpressionIndependentPreferences": {
          "name": "modesOfExpressionIndependentPreferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modesOfExpressionPersonalGoals": {
          "name": "modesOfExpressionPersonalGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modesOfExpressionAssistanceRequired": {
          "name": "modesOfExpressionAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "modesOfExpressionCaregiverInstructions": {
          "name": "modesOfExpressionCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingProblems": {
          "name": "hearingProblems",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingProblemDescription": {
          "name": "hearingProblemDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingStrengthsAndAbilities": {
          "name": "hearingStrengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingIndependentPreferences": {
          "name": "hearingIndependentPreferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingPersonalGoals": {
          "name": "hearingPersonalGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingAssistanceRequired": {
          "name": "hearingAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hearingCaregiverInstructions": {
          "name": "hearingCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionProblems": {
          "name": "visionProblems",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionProblemDescription": {
          "name": "visionProblemDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionEquipment": {
          "name": "visionEquipment",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionStrengthsAndAbilities": {
          "name": "visionStrengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionIndependentPreferences": {
          "name": "visionIndependentPreferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionPersonalGoals": {
          "name": "visionPersonalGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionAssistanceRequired": {
          "name": "visionAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "visionCaregiverInstructions": {
          "name": "visionCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "phoneUseAbility": {
          "name": "phoneUseAbility",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentHasOwnPhone": {
          "name": "residentHasOwnPhone",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentPhoneNumber": {
          "name": "residentPhoneNumber",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "preferredLanguage": {
          "name": "preferredLanguage",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "communicationComments": {
          "name": "communicationComments",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "NCPResidentMedicationOverview": {
      "name": "NCPResidentMedicationOverview",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "medicationAllergies": {
          "name": "medicationAllergies",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "needsMultipleMedicationAssistanceTypes": {
          "name": "needsMultipleMedicationAssistanceTypes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prescribedPsychopharmacologicalMedications": {
          "name": "prescribedPsychopharmacologicalMedications",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "seeMARForCurrentMedications": {
          "name": "seeMARForCurrentMedications",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medsOrderedBy": {
          "name": "medsOrderedBy",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medsDeliveredBy": {
          "name": "medsDeliveredBy",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medsArePharmacyPacked": {
          "name": "medsArePharmacyPacked",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pharmacyPackingNote": {
          "name": "pharmacyPackingNote",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_med_overview_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentMedicationManagement": {
      "name": "NCPResidentMedicationManagement",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "residentStrengthsAbilitiesPreferencesGoals": {
          "name": "residentStrengthsAbilitiesPreferencesGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoHowWhen": {
          "name": "assistanceRequiredWhoHowWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverInstructionWhoHowWhenOften": {
          "name": "caregiverInstructionWhoHowWhenOften",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "selfAdministration": {
          "name": "selfAdministration",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "selfAdministrationWithAssistance": {
          "name": "selfAdministrationWithAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medicationAdministration": {
          "name": "medicationAdministration",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "equipment": {
          "name": "equipment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "typeOfMedicationManagementNeeded": {
          "name": "typeOfMedicationManagementNeeded",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "oralMedication": {
          "name": "oralMedication",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "oralMedicationDetails": {
          "name": "oralMedicationDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "topicalMedication": {
          "name": "topicalMedication",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "topicalMedicationDetails": {
          "name": "topicalMedicationDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "eyeDropsOrOintment": {
          "name": "eyeDropsOrOintment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "eyeDropsOrOintmentDetails": {
          "name": "eyeDropsOrOintmentDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "inhalers": {
          "name": "inhalers",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "inhalerDetails": {
          "name": "inhalerDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sprays": {
          "name": "sprays",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sprayDetails": {
          "name": "sprayDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "injections": {
          "name": "injections",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "injectionDetails": {
          "name": "injectionDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "injectionByResident": {
          "name": "injectionByResident",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "injectionBySurrogate": {
          "name": "injectionBySurrogate",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "injectionByFamily": {
          "name": "injectionByFamily",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "injectionByLicensedProfessional": {
          "name": "injectionByLicensedProfessional",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "injectionByQualifiedCGUnderNurseDelegationInsulinOnly": {
          "name": "injectionByQualifiedCGUnderNurseDelegationInsulinOnly",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "allergyKits": {
          "name": "allergyKits",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "allergyKitDetails": {
          "name": "allergyKitDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "suppositories": {
          "name": "suppositories",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "suppositoryDetails": {
          "name": "suppositoryDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "otherMedicationType": {
          "name": "otherMedicationType",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "requiresNurseDelegation": {
          "name": "requiresNurseDelegation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rnDelegatorName": {
          "name": "rnDelegatorName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rnDelegatorPhone": {
          "name": "rnDelegatorPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rnDelegatorFax": {
          "name": "rnDelegatorFax",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rnDelegatorEmail": {
          "name": "rnDelegatorEmail",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medicationAssistanceReason": {
          "name": "medicationAssistanceReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationManagementStrengthsAbilities": {
          "name": "medicationManagementStrengthsAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationAssistanceRequired": {
          "name": "medicationAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWillMedication": {
          "name": "caregiverWillMedication",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "followsFiveRightsPlusTwo": {
          "name": "followsFiveRightsPlusTwo",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rightResident": {
          "name": "rightResident",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rightMedication": {
          "name": "rightMedication",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rightDose": {
          "name": "rightDose",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rightRoute": {
          "name": "rightRoute",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rightTime": {
          "name": "rightTime",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "rightDocumentation": {
          "name": "rightDocumentation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "followsResidentRightToRefuseStrategy": {
          "name": "followsResidentRightToRefuseStrategy",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "physicianAndRNDelegatorInstructions": {
          "name": "physicianAndRNDelegatorInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationPlanWhenAway": {
          "name": "medicationPlanWhenAway",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "awayFromAFHStrengthsAbilities": {
          "name": "awayFromAFHStrengthsAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "awayFromAFHAssistanceRequired": {
          "name": "awayFromAFHAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWillWhenAway": {
          "name": "caregiverWillWhenAway",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicationRefusalPlan": {
          "name": "medicationRefusalPlan",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "refusalPlanStrengthsAbilities": {
          "name": "refusalPlanStrengthsAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "refusalPlanAssistanceRequired": {
          "name": "refusalPlanAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWillForRefusal": {
          "name": "caregiverWillForRefusal",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_med_management_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentHealthIndicators": {
      "name": "NCPResidentHealthIndicators",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "residentStrengthsAbilitiesPreferencesGoals": {
          "name": "residentStrengthsAbilitiesPreferencesGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWhenHow": {
          "name": "assistanceRequiredWhoWhenHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "monitorsPain": {
          "name": "monitorsPain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "painImpact": {
          "name": "painImpact",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "monitorsWeightLossGain": {
          "name": "monitorsWeightLossGain",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "currentWeight": {
          "name": "currentWeight",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "currentHeight": {
          "name": "currentHeight",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "monitorsVitalSigns": {
          "name": "monitorsVitalSigns",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "vitalSignsDetails": {
          "name": "vitalSignsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "monitorsHospitalisationOrEmergencyVisits": {
          "name": "monitorsHospitalisationOrEmergencyVisits",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hospitalisationOrEmergencyVisitDetails": {
          "name": "hospitalisationOrEmergencyVisitDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "monitorsOtherHealthIndicators": {
          "name": "monitorsOtherHealthIndicators",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherHealthIndicators": {
          "name": "otherHealthIndicators",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequired": {
          "name": "assistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "monitoringAndReportingInstructions": {
          "name": "monitoringAndReportingInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverReportingInstruction": {
          "name": "caregiverReportingInstruction",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "allergies": {
          "name": "allergies",
          "type": "NCPResidentHealthIndicatorAllergy",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentHealthIndicatorAllergy",
            "isList": true
          },
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_health_indicators_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentHealthIndicatorAllergy": {
      "name": "NCPResidentHealthIndicatorAllergy",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "healthIndicatorsId": {
          "name": "healthIndicatorsId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "substance": {
          "name": "substance",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reaction": {
          "name": "reaction",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "healthIndicators": {
          "name": "healthIndicators",
          "type": "NCPResidentHealthIndicators",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentHealthIndicators",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [healthIndicatorsId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "NCPResidentTreatments": {
      "name": "NCPResidentTreatments",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "treatment1Type": {
          "name": "treatment1Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1TreatmentProgramTherapyIntervention": {
          "name": "treatment1TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1WhoWillProvideWhenAndHow": {
          "name": "treatment1WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment1MonitoringComment": {
          "name": "treatment1MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment2Type": {
          "name": "treatment2Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment2TreatmentProgramTherapyIntervention": {
          "name": "treatment2TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment2WhoWillProvideWhenAndHow": {
          "name": "treatment2WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment2MonitoringComment": {
          "name": "treatment2MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment3Type": {
          "name": "treatment3Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment3TreatmentProgramTherapyIntervention": {
          "name": "treatment3TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment3WhoWillProvideWhenAndHow": {
          "name": "treatment3WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment3MonitoringComment": {
          "name": "treatment3MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment4Type": {
          "name": "treatment4Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment4TreatmentProgramTherapyIntervention": {
          "name": "treatment4TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment4WhoWillProvideWhenAndHow": {
          "name": "treatment4WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment4MonitoringComment": {
          "name": "treatment4MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment5Type": {
          "name": "treatment5Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment5TreatmentProgramTherapyIntervention": {
          "name": "treatment5TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment5WhoWillProvideWhenAndHow": {
          "name": "treatment5WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment5MonitoringComment": {
          "name": "treatment5MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment6Type": {
          "name": "treatment6Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment6TreatmentProgramTherapyIntervention": {
          "name": "treatment6TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment6WhoWillProvideWhenAndHow": {
          "name": "treatment6WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment6MonitoringComment": {
          "name": "treatment6MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment7Type": {
          "name": "treatment7Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment7TreatmentProgramTherapyIntervention": {
          "name": "treatment7TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment7WhoWillProvideWhenAndHow": {
          "name": "treatment7WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment7MonitoringComment": {
          "name": "treatment7MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "treatment8Type": {
          "name": "treatment8Type",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment8TreatmentProgramTherapyIntervention": {
          "name": "treatment8TreatmentProgramTherapyIntervention",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment8WhoWillProvideWhenAndHow": {
          "name": "treatment8WhoWillProvideWhenAndHow",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "treatment8MonitoringComment": {
          "name": "treatment8MonitoringComment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWillProvide": {
          "name": "assistanceRequiredWhoWillProvide",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_treatments_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentPrograms": {
      "name": "NCPResidentPrograms",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "homeHealth": {
          "name": "homeHealth",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "adultDayHealth": {
          "name": "adultDayHealth",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hospiceAgency": {
          "name": "hospiceAgency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hospicePlan": {
          "name": "hospicePlan",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "otherProgram": {
          "name": "otherProgram",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "meaningfulDay": {
          "name": "meaningfulDay",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "meaningfulDayDetails": {
          "name": "meaningfulDayDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "physicalEnablers": {
          "name": "physicalEnablers",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWillProvide": {
          "name": "assistanceRequiredWhoWillProvide",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_programs_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentTreatmentRefusalPlan": {
      "name": "NCPResidentTreatmentRefusalPlan",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWillProvide": {
          "name": "assistanceRequiredWhoWillProvide",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_treatment_refusal_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentPsychSocialCognitive": {
      "name": "NCPResidentPsychSocialCognitive",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "residentStrengthsAbilitiesPrefersToDoIndependentlyPreferencesAndPersonalGoals": {
          "name": "residentStrengthsAbilitiesPrefersToDoIndependentlyPreferencesAndPersonalGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWillProvideWhenAndHow": {
          "name": "assistanceRequiredWhoWillProvideWhenAndHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleep": {
          "name": "sleep",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sleepNarrative": {
          "name": "sleepNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sleepDisturbance": {
          "name": "sleepDisturbance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nighttimeAssistanceNeeded": {
          "name": "nighttimeAssistanceNeeded",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "memoryImpairment": {
          "name": "memoryImpairment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "shortTermMemory": {
          "name": "shortTermMemory",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "longTermMemory": {
          "name": "longTermMemory",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "orientedToPerson": {
          "name": "orientedToPerson",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "memoryCaregiverInstructions": {
          "name": "memoryCaregiverInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "memoryNarrative": {
          "name": "memoryNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cognitiveExpressive": {
          "name": "cognitiveExpressive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cognitiveReceptive": {
          "name": "cognitiveReceptive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "impairedDecisionMaking": {
          "name": "impairedDecisionMaking",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "impairedDecisionMakingDetails": {
          "name": "impairedDecisionMakingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "difficultyInNewOrUnfamiliarSituations": {
          "name": "difficultyInNewOrUnfamiliarSituations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "difficultyInNewOrUnfamiliarSituationsDetails": {
          "name": "difficultyInNewOrUnfamiliarSituationsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "difficultyInNewOrUnfamiliarSituationsAlterability": {
          "name": "difficultyInNewOrUnfamiliarSituationsAlterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "disruptiveBehavior": {
          "name": "disruptiveBehavior",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "disruptiveBehaviorDetails": {
          "name": "disruptiveBehaviorDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assaultive": {
          "name": "assaultive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assaultiveDetails": {
          "name": "assaultiveDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "resistiveToCare": {
          "name": "resistiveToCare",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "resistiveToCareDetails": {
          "name": "resistiveToCareDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "depression": {
          "name": "depression",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "depressionDetails": {
          "name": "depressionDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "anxiety": {
          "name": "anxiety",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "anxietyDetails": {
          "name": "anxietyDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "irritability": {
          "name": "irritability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "irritabilityDetails": {
          "name": "irritabilityDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "disorientation": {
          "name": "disorientation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "disorientationDetails": {
          "name": "disorientationDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "wanderingInHomePacing": {
          "name": "wanderingInHomePacing",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "wanderingInHomePacingDetails": {
          "name": "wanderingInHomePacingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "exitSeeking": {
          "name": "exitSeeking",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "exitSeekingDetails": {
          "name": "exitSeekingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "hallucinations": {
          "name": "hallucinations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hallucinationsDetails": {
          "name": "hallucinationsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "delusions": {
          "name": "delusions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "delusionsDetails": {
          "name": "delusionsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "verballyAgitatedAggressive": {
          "name": "verballyAgitatedAggressive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "verballyAgitatedAggressiveDetails": {
          "name": "verballyAgitatedAggressiveDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "physicallyAgitatedAggressive": {
          "name": "physicallyAgitatedAggressive",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "physicallyAgitatedAggressiveDetails": {
          "name": "physicallyAgitatedAggressiveDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "inappropriateOrUnsafeBehavior": {
          "name": "inappropriateOrUnsafeBehavior",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "inappropriateOrUnsafeBehaviorDetails": {
          "name": "inappropriateOrUnsafeBehaviorDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "suicidalIdeation": {
          "name": "suicidalIdeation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "suicidalIdeationDetails": {
          "name": "suicidalIdeationDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "disrobing": {
          "name": "disrobing",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "disrobingDetails": {
          "name": "disrobingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "weepingCrying": {
          "name": "weepingCrying",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "weepingCryingDetails": {
          "name": "weepingCryingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "unawareOfConsequences": {
          "name": "unawareOfConsequences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "unawareOfConsequencesDetails": {
          "name": "unawareOfConsequencesDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "unrealisticFearsAndSuspicions": {
          "name": "unrealisticFearsAndSuspicions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "unrealisticFearsAndSuspicionsDetails": {
          "name": "unrealisticFearsAndSuspicionsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "inappropriateSpitting": {
          "name": "inappropriateSpitting",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "inappropriateSpittingDetails": {
          "name": "inappropriateSpittingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "breaksThrowsThings": {
          "name": "breaksThrowsThings",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "breaksThrowsThingsDetails": {
          "name": "breaksThrowsThingsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "otherBehavior": {
          "name": "otherBehavior",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherBehaviorDetails": {
          "name": "otherBehaviorDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior1Name": {
          "name": "behavior1Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior1Description": {
          "name": "behavior1Description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior1Frequency": {
          "name": "behavior1Frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior1Alterability": {
          "name": "behavior1Alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior1PersonalizedInterventions": {
          "name": "behavior1PersonalizedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior2Name": {
          "name": "behavior2Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior2Description": {
          "name": "behavior2Description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior2Frequency": {
          "name": "behavior2Frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior2Alterability": {
          "name": "behavior2Alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior2PersonalizedInterventions": {
          "name": "behavior2PersonalizedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior3Name": {
          "name": "behavior3Name",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior3Description": {
          "name": "behavior3Description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavior3Frequency": {
          "name": "behavior3Frequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior3Alterability": {
          "name": "behavior3Alterability",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavior3PersonalizedInterventions": {
          "name": "behavior3PersonalizedInterventions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "cbhsReferralMade": {
          "name": "cbhsReferralMade",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cbhsReasonNotReferred": {
          "name": "cbhsReasonNotReferred",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cbhsOtherReason": {
          "name": "cbhsOtherReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "requiresPsychopharmacologicalMedications": {
          "name": "requiresPsychopharmacologicalMedications",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "psychopharmacologicalMedicationSymptoms": {
          "name": "psychopharmacologicalMedicationSymptoms",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "behavioralHealthSupportCrisisPlan": {
          "name": "behavioralHealthSupportCrisisPlan",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behavioralHealthSupportCrisisPlanDetails": {
          "name": "behavioralHealthSupportCrisisPlanDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "counseling": {
          "name": "counseling",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "counselingDetails": {
          "name": "counselingDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "mentalHealthProviderMHP": {
          "name": "mentalHealthProviderMHP",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "pastBehaviors": {
          "name": "pastBehaviors",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "dshsSpecializedBehavioralPrograms": {
          "name": "dshsSpecializedBehavioralPrograms",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "dshsMeaningfulDay": {
          "name": "dshsMeaningfulDay",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dshsMeaningfulDayDetails": {
          "name": "dshsMeaningfulDayDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "expandedCommunityServicesHCSOnly": {
          "name": "expandedCommunityServicesHCSOnly",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "expandedCommunityServicesDetails": {
          "name": "expandedCommunityServicesDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "specializedBehaviorServicesHCSOnly": {
          "name": "specializedBehaviorServicesHCSOnly",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "specializedBehaviorServicesDetails": {
          "name": "specializedBehaviorServicesDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "mentalHealthProviderProgram": {
          "name": "mentalHealthProviderProgram",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "mentalHealthProviderProgramDetails": {
          "name": "mentalHealthProviderProgramDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "contactInfo": {
          "name": "contactInfo",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "interventionsMeaningfulDay": {
          "name": "interventionsMeaningfulDay",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventionsMeaningfulDayDetails": {
          "name": "interventionsMeaningfulDayDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "interventionsOther": {
          "name": "interventionsOther",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventionsOtherDetails": {
          "name": "interventionsOtherDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "typicalDayNarrative": {
          "name": "typicalDayNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "abilityOfResidentToBeLeftUnattended": {
          "name": "abilityOfResidentToBeLeftUnattended",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "leftAloneStrengthsAndAbilities": {
          "name": "leftAloneStrengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "leftAloneAssistanceRequired": {
          "name": "leftAloneAssistanceRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "leftAloneCaregiverWill": {
          "name": "leftAloneCaregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWillProvide": {
          "name": "assistanceRequiredWhoWillProvide",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_psych_social_cognitive_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentUniversalPrecautions": {
      "name": "NCPResidentUniversalPrecautions",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "always": {
          "name": "always",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "specialPrecautions": {
          "name": "specialPrecautions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "alternativeMethodForVisitation": {
          "name": "alternativeMethodForVisitation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "maskResidentIs": {
          "name": "maskResidentIs",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ableToWearMask": {
          "name": "ableToWearMask",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ableToWearMaskDetails": {
          "name": "ableToWearMaskDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "notAbleToWearMask": {
          "name": "notAbleToWearMask",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notAbleToWearMaskDetails": {
          "name": "notAbleToWearMaskDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "safeToHaveSanitizerOrDisinfectantWipesLeftOut": {
          "name": "safeToHaveSanitizerOrDisinfectantWipesLeftOut",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sanitizerOrDisinfectantWipesDetails": {
          "name": "sanitizerOrDisinfectantWipesDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "upToDateOnVaccinations": {
          "name": "upToDateOnVaccinations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "vaccinationsDetails": {
          "name": "vaccinationsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sharesMedicalEquipment": {
          "name": "sharesMedicalEquipment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sharedMedicalEquipmentDetails": {
          "name": "sharedMedicalEquipmentDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "otherPrecautions": {
          "name": "otherPrecautions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherPrecautionsDetails": {
          "name": "otherPrecautionsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhoWillProvide": {
          "name": "assistanceRequiredWhoWillProvide",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_universal_precautions_resident_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentADL": {
      "name": "NCPResidentADL",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "residentFunctionalLimitations": {
          "name": "residentFunctionalLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_adl_resident_fkey\""
            }
          ]
        },
        "activities": {
          "name": "activities",
          "type": "NCPResidentADLActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentADLActivity",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "NCPResidentADLActivity": {
      "name": "NCPResidentADLActivity",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "adlId": {
          "name": "adlId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityKey": {
          "name": "activityKey",
          "type": "NCPADLActivityKey",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "prefersToDoIndependently": {
          "name": "prefersToDoIndependently",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "preferencesAndPersonalGoals": {
          "name": "preferencesAndPersonalGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWho": {
          "name": "assistanceRequiredWho",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "monitoringReportingConcerns": {
          "name": "monitoringReportingConcerns",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "ambulationInsideLevel": {
          "name": "ambulationInsideLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ambulationOutsideLevel": {
          "name": "ambulationOutsideLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "risksForFalls": {
          "name": "risksForFalls",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "fallPreventionPlan": {
          "name": "fallPreventionPlan",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bedroomDoorLockChosen": {
          "name": "bedroomDoorLockChosen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ambulationEquipmentSupplies": {
          "name": "ambulationEquipmentSupplies",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "ambulationEquipmentVendor": {
          "name": "ambulationEquipmentVendor",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ambulationLimitations": {
          "name": "ambulationLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bedMobilityTransferLevel": {
          "name": "bedMobilityTransferLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinCareDueToPositioning": {
          "name": "skinCareDueToPositioning",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "positioningEquipmentSupplies": {
          "name": "positioningEquipmentSupplies",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "turningAndRepositioningNeeded": {
          "name": "turningAndRepositioningNeeded",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "turningAndRepositioningFrequency": {
          "name": "turningAndRepositioningFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "safetyAssessment": {
          "name": "safetyAssessment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bedMobilityRisksForFalls": {
          "name": "bedMobilityRisksForFalls",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bedMobilityFallPreventionPlan": {
          "name": "bedMobilityFallPreventionPlan",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "safetyPlan": {
          "name": "safetyPlan",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "medicalDevices": {
          "name": "medicalDevices",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "enablers": {
          "name": "enablers",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hoyerLift": {
          "name": "hoyerLift",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "transferPole": {
          "name": "transferPole",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medicalDeviceEnablerRiskAssessment": {
          "name": "medicalDeviceEnablerRiskAssessment",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nighttimeCareNeeds": {
          "name": "nighttimeCareNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "nighttimeEquipmentSupplies": {
          "name": "nighttimeEquipmentSupplies",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "eatingAssistanceLevel": {
          "name": "eatingAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "specialDietSupplements": {
          "name": "specialDietSupplements",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "eatingHabits": {
          "name": "eatingHabits",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "foodAllergies": {
          "name": "foodAllergies",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "eatingEquipmentSuppliesProcedures": {
          "name": "eatingEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "eatingLimitations": {
          "name": "eatingLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "toiletingAssistanceLevel": {
          "name": "toiletingAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toiletingFrequency": {
          "name": "toiletingFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "continenceIssues": {
          "name": "continenceIssues",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bladderIncontinence": {
          "name": "bladderIncontinence",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "bowelIncontinence": {
          "name": "bowelIncontinence",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinCareForIncontinence": {
          "name": "skinCareForIncontinence",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toiletingEquipmentSuppliesProcedures": {
          "name": "toiletingEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "toiletingLimitations": {
          "name": "toiletingLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "dressingAssistanceLevel": {
          "name": "dressingAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dressingEquipmentSuppliesProcedures": {
          "name": "dressingEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "dressingLimitations": {
          "name": "dressingLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "personalHygieneAssistanceLevel": {
          "name": "personalHygieneAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "ownTeeth": {
          "name": "ownTeeth",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "partials": {
          "name": "partials",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dentures": {
          "name": "dentures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "oralHygiene": {
          "name": "oralHygiene",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "flossing": {
          "name": "flossing",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "brushing": {
          "name": "brushing",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "soaking": {
          "name": "soaking",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "hairCare": {
          "name": "hairCare",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "mensesCare": {
          "name": "mensesCare",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "personalHygieneFrequency": {
          "name": "personalHygieneFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "personalHygieneEquipmentSuppliesProcedures": {
          "name": "personalHygieneEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "personalHygieneLimitations": {
          "name": "personalHygieneLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bathingAssistanceLevel": {
          "name": "bathingAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "bathingFrequency": {
          "name": "bathingFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "bathingEquipmentSuppliesProcedures": {
          "name": "bathingEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "bathingLimitations": {
          "name": "bathingLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCareAssistanceLevel": {
          "name": "footCareAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "footCareFrequency": {
          "name": "footCareFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "diabeticFootCare": {
          "name": "diabeticFootCare",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nailCare": {
          "name": "nailCare",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nailCareFrequency": {
          "name": "nailCareFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "homeHealthAgency": {
          "name": "homeHealthAgency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "footCareEquipmentSuppliesProcedures": {
          "name": "footCareEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "footCareLimitations": {
          "name": "footCareLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareAssistanceLevel": {
          "name": "skinCareAssistanceLevel",
          "type": "NCPADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinCareFrequency": {
          "name": "skinCareFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinStatus": {
          "name": "skinStatus",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinProblemsDescription": {
          "name": "skinProblemsDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinProblemsStatus": {
          "name": "skinProblemsStatus",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "pressureInjuriesDescription": {
          "name": "pressureInjuriesDescription",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "dressingChanges": {
          "name": "dressingChanges",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dressingChangesFrequency": {
          "name": "dressingChangesFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nurseDelegated": {
          "name": "nurseDelegated",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nurseDelegatedFrequency": {
          "name": "nurseDelegatedFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinCareHomeHealthAgency": {
          "name": "skinCareHomeHealthAgency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "skinCareEquipmentSuppliesProcedures": {
          "name": "skinCareEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "skinCareLimitations": {
          "name": "skinCareLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "adl": {
          "name": "adl",
          "type": "NCPResidentADL",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentADL",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [adlId], references: [id], onDelete: Cascade, map: \"ncp_adl_activity_adl_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentIADL": {
      "name": "NCPResidentIADL",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "prefersReading": {
          "name": "prefersReading",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersAudioBooksPodcasts": {
          "name": "prefersAudioBooksPodcasts",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersStorytelling": {
          "name": "prefersStorytelling",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersPhoneConversationVisiting": {
          "name": "prefersPhoneConversationVisiting",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersReminiscing": {
          "name": "prefersReminiscing",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersCurrentEvents": {
          "name": "prefersCurrentEvents",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersDiscussionGroup": {
          "name": "prefersDiscussionGroup",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersBibleStudyOrChurch": {
          "name": "prefersBibleStudyOrChurch",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersGardening": {
          "name": "prefersGardening",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersOutings": {
          "name": "prefersOutings",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersAnimalsAndZoos": {
          "name": "prefersAnimalsAndZoos",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersExerciseAndRangeOfMotion": {
          "name": "prefersExerciseAndRangeOfMotion",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersTherapeuticWalking": {
          "name": "prefersTherapeuticWalking",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersCookingAndBaking": {
          "name": "prefersCookingAndBaking",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersHouseChores": {
          "name": "prefersHouseChores",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersPartiesAndSocialGatherings": {
          "name": "prefersPartiesAndSocialGatherings",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersArtsAndCrafts": {
          "name": "prefersArtsAndCrafts",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersTableGames": {
          "name": "prefersTableGames",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersBeautyServices": {
          "name": "prefersBeautyServices",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersMusic": {
          "name": "prefersMusic",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersEmploymentSupport": {
          "name": "prefersEmploymentSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersCommunityIntegration": {
          "name": "prefersCommunityIntegration",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersVisitors": {
          "name": "prefersVisitors",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersWatchingTVAndMovies": {
          "name": "prefersWatchingTVAndMovies",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersOtherActivity1": {
          "name": "prefersOtherActivity1",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherActivityPreference1Text": {
          "name": "otherActivityPreference1Text",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "prefersOtherActivity2": {
          "name": "prefersOtherActivity2",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherActivityPreference2Text": {
          "name": "otherActivityPreference2Text",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityNarrative": {
          "name": "activityNarrative",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "otherIssuesConcernsProblems": {
          "name": "otherIssuesConcernsProblems",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_iadl_resident_fkey\""
            }
          ]
        },
        "activities": {
          "name": "activities",
          "type": "NCPResidentIADLActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentIADLActivity",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "NCPResidentIADLActivity": {
      "name": "NCPResidentIADLActivity",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "iadlId": {
          "name": "iadlId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activityKey": {
          "name": "activityKey",
          "type": "NCPIADLActivityKey",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "strengthsAndAbilities": {
          "name": "strengthsAndAbilities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "prefersToDoIndependently": {
          "name": "prefersToDoIndependently",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "preferencesAndPersonalGoals": {
          "name": "preferencesAndPersonalGoals",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWho": {
          "name": "assistanceRequiredWho",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredWhen": {
          "name": "assistanceRequiredWhen",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "assistanceRequiredHow": {
          "name": "assistanceRequiredHow",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "caregiverWill": {
          "name": "caregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "managingFinancesLevel": {
          "name": "managingFinancesLevel",
          "type": "NCPIADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "whoManagesFinances": {
          "name": "whoManagesFinances",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "whoManagesFinancialRecords": {
          "name": "whoManagesFinancialRecords",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "payeeNameAndContactInformation": {
          "name": "payeeNameAndContactInformation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "financesPrefersToDoIndependently": {
          "name": "financesPrefersToDoIndependently",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "financesCaregiverWill": {
          "name": "financesCaregiverWill",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "shoppingAssistanceLevel": {
          "name": "shoppingAssistanceLevel",
          "type": "NCPIADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "shoppingSpecialTransportationNeeds": {
          "name": "shoppingSpecialTransportationNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "shoppingFrequency": {
          "name": "shoppingFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "shoppingEquipmentSuppliesProcedures": {
          "name": "shoppingEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "shoppingLimitations": {
          "name": "shoppingLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "transportationAssistanceLevel": {
          "name": "transportationAssistanceLevel",
          "type": "NCPIADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "medicalServicesTransportation": {
          "name": "medicalServicesTransportation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "transportationSpecialNeeds": {
          "name": "transportationSpecialNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "escortRequired": {
          "name": "escortRequired",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "transportationFrequency": {
          "name": "transportationFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "transportationEquipmentSuppliesProcedures": {
          "name": "transportationEquipmentSuppliesProcedures",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "transportationLimitations": {
          "name": "transportationLimitations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "socialCulturalConsiderations": {
          "name": "socialCulturalConsiderations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "activitiesSocialAssistanceLevel": {
          "name": "activitiesSocialAssistanceLevel",
          "type": "NCPIADLAssistanceLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interestsActivitiesReligiousActivities": {
          "name": "interestsActivitiesReligiousActivities",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "socialCulturalTraditionsPreferences": {
          "name": "socialCulturalTraditionsPreferences",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "familyFriendsRelationships": {
          "name": "familyFriendsRelationships",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "employmentSupport": {
          "name": "employmentSupport",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "clubsGroupsDayHealth": {
          "name": "clubsGroupsDayHealth",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "specialArrangements": {
          "name": "specialArrangements",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "participationIssues": {
          "name": "participationIssues",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "emergencyNumbersReference": {
          "name": "emergencyNumbersReference",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "participationAssistance": {
          "name": "participationAssistance",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "specialArrangementsParticipation": {
          "name": "specialArrangementsParticipation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "residentSmokes": {
          "name": "residentSmokes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "smokingSafetyConcerns": {
          "name": "smokingSafetyConcerns",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "smokingSafetyConcernsDetails": {
          "name": "smokingSafetyConcernsDetails",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "smokingPolicyReviewedAndSigned": {
          "name": "smokingPolicyReviewedAndSigned",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "cigaretteLighterStorage": {
          "name": "cigaretteLighterStorage",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "receivesCaseManagement": {
          "name": "receivesCaseManagement",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManagerName": {
          "name": "caseManagerName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManagementAgency": {
          "name": "caseManagementAgency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManagerPhone": {
          "name": "caseManagerPhone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManagerEmail": {
          "name": "caseManagerEmail",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "caseManagerFax": {
          "name": "caseManagerFax",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assistiveDeviceOrServicesTrigger": {
          "name": "assistiveDeviceOrServicesTrigger",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "carePlanHelpTrigger": {
          "name": "carePlanHelpTrigger",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "significantChangeTrigger": {
          "name": "significantChangeTrigger",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "iadl": {
          "name": "iadl",
          "type": "NCPResidentIADL",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentIADL",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [iadlId], references: [id], onDelete: Cascade, map: \"ncp_iadl_activity_iadl_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentNCPReviewApproval": {
      "name": "NCPResidentNCPReviewApproval",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "dateOfOriginalPlan": {
          "name": "dateOfOriginalPlan",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentParticipationStatementAcknowledged": {
          "name": "residentParticipationStatementAcknowledged",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentRecommendations": {
          "name": "residentRecommendations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "ncpSentToDshsCaseManagerDate": {
          "name": "ncpSentToDshsCaseManagerDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentVerbalAgreementDate": {
          "name": "residentVerbalAgreementDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "verbalAgreementParticipantName": {
          "name": "verbalAgreementParticipantName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "verbalAgreementParticipantRole": {
          "name": "verbalAgreementParticipantRole",
          "type": "NCPParticipantRole",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "verbalAgreementPlanReadDate": {
          "name": "verbalAgreementPlanReadDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "verbalAgreementRecommendedChanges": {
          "name": "verbalAgreementRecommendedChanges",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade, map: \"ncp_review_approval_resident_fkey\""
            }
          ]
        },
        "reviewDates": {
          "name": "reviewDates",
          "type": "NCPResidentNCPReviewDate",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPReviewDate",
            "isList": true
          },
          "attributes": []
        },
        "participants": {
          "name": "participants",
          "type": "NCPResidentNCPDevelopmentParticipant",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPDevelopmentParticipant",
            "isList": true
          },
          "attributes": []
        },
        "approvals": {
          "name": "approvals",
          "type": "NCPResidentNCPApproval",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPApproval",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "NCPResidentNCPReviewDate": {
      "name": "NCPResidentNCPReviewDate",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "reviewApprovalId": {
          "name": "reviewApprovalId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewDate": {
          "name": "reviewDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "revisedAt": {
          "name": "revisedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reason": {
          "name": "reason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "reviewApproval": {
          "name": "reviewApproval",
          "type": "NCPResidentNCPReviewApproval",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPReviewApproval",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [reviewApprovalId], references: [id], onDelete: Cascade, map: \"ncp_review_date_review_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentNCPDevelopmentParticipant": {
      "name": "NCPResidentNCPDevelopmentParticipant",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "reviewApprovalId": {
          "name": "reviewApprovalId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "role": {
          "name": "role",
          "type": "NCPParticipantRole",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "personName": {
          "name": "personName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "signature": {
          "name": "signature",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "signatureDate": {
          "name": "signatureDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherLabel": {
          "name": "otherLabel",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "collateralContactId": {
          "name": "collateralContactId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "collateralContact": {
          "name": "collateralContact",
          "type": "ResidentCollateralContact",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentCollateralContact",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [collateralContactId], references: [id], onDelete: SetNull, map: \"ncp_dev_participant_collateral_contact_fkey\""
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "reviewApproval": {
          "name": "reviewApproval",
          "type": "NCPResidentNCPReviewApproval",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPReviewApproval",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [reviewApprovalId], references: [id], onDelete: Cascade, map: \"ncp_dev_participant_review_fkey\""
            }
          ]
        }
      }
    },
    "NCPResidentNCPApproval": {
      "name": "NCPResidentNCPApproval",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "reviewApprovalId": {
          "name": "reviewApprovalId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "role": {
          "name": "role",
          "type": "NCPParticipantRole",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "personName": {
          "name": "personName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "signature": {
          "name": "signature",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "signatureDate": {
          "name": "signatureDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "otherLabel": {
          "name": "otherLabel",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "collateralContactId": {
          "name": "collateralContactId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "collateralContact": {
          "name": "collateralContact",
          "type": "ResidentCollateralContact",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentCollateralContact",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [collateralContactId], references: [id], onDelete: SetNull, map: \"ncp_approval_collateral_contact_fkey\""
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "reviewApproval": {
          "name": "reviewApproval",
          "type": "NCPResidentNCPReviewApproval",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "NCPResidentNCPReviewApproval",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [reviewApprovalId], references: [id], onDelete: Cascade, map: \"ncp_approval_review_fkey\""
            }
          ]
        }
      }
    },
    "BehaviorEpisode": {
      "name": "BehaviorEpisode",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "documentedById": {
          "name": "documentedById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "startedAt": {
          "name": "startedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "endedAt": {
          "name": "endedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "BehaviorEpisodeStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "context": {
          "name": "context",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "possibleTrigger": {
          "name": "possibleTrigger",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "finalizedAt": {
          "name": "finalizedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "carePlanVersionId": {
          "name": "carePlanVersionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "careDeliveryId": {
          "name": "careDeliveryId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "aiDrafts": {
          "name": "aiDrafts",
          "type": "BehaviorAIDraft",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorAIDraft",
            "isList": true
          },
          "attributes": []
        },
        "careDelivery": {
          "name": "careDelivery",
          "type": "CareDelivery",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CareDeliveryBehaviorEpisodes\", fields: [careDeliveryId], references: [id]"
            }
          ]
        },
        "carePlanVersion": {
          "name": "carePlanVersion",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [carePlanVersionId], references: [id]"
            }
          ]
        },
        "documentedBy": {
          "name": "documentedBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorDocumenter\", fields: [documentedById], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "events": {
          "name": "events",
          "type": "BehaviorEvent",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEvent",
            "isList": true
          },
          "attributes": []
        },
        "followUps": {
          "name": "followUps",
          "type": "BehaviorFollowUp",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorFollowUp",
            "isList": true
          },
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "BehaviorIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorIntervention",
            "isList": true
          },
          "attributes": []
        },
        "notifications": {
          "name": "notifications",
          "type": "BehaviorNotification",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorNotification",
            "isList": true
          },
          "attributes": []
        },
        "outcome": {
          "name": "outcome",
          "type": "BehaviorOutcome",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorOutcome",
            "isList": false
          },
          "attributes": []
        },
        "supervision": {
          "name": "supervision",
          "type": "SupportiveSupervision",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "SupportiveSupervision",
            "isList": false
          },
          "attributes": []
        }
      }
    },
    "BehaviorEvent": {
      "name": "BehaviorEvent",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorType": {
          "name": "behaviorType",
          "type": "BehaviorType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "severity": {
          "name": "severity",
          "type": "BehaviorSeverity",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "occurredAt": {
          "name": "occurredAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "durationMinutes": {
          "name": "durationMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "frequencyType": {
          "name": "frequencyType",
          "type": "FrequencyType",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "occurrenceCount": {
          "name": "occurrenceCount",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "context": {
          "name": "context",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "possibleTrigger": {
          "name": "possibleTrigger",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "observation": {
          "name": "observation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "behaviorDefinitionId": {
          "name": "behaviorDefinitionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dailyLogEntries": {
          "name": "dailyLogEntries",
          "type": "BehaviorDailyLogEntryBehavior",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntryBehavior",
            "isList": true
          },
          "attributes": []
        },
        "behaviorDefinition": {
          "name": "behaviorDefinition",
          "type": "BehaviorDefinition",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [behaviorDefinitionId], references: [id]"
            }
          ]
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "interventions": {
          "name": "interventions",
          "type": "BehaviorIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorIntervention",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "BehaviorIntervention": {
      "name": "BehaviorIntervention",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "eventId": {
          "name": "eventId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "type": {
          "name": "type",
          "type": "InterventionType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "occurredAt": {
          "name": "occurredAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "durationMinutes": {
          "name": "durationMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "interventionDefinitionId": {
          "name": "interventionDefinitionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dailyLogEntries": {
          "name": "dailyLogEntries",
          "type": "BehaviorDailyLogEntryIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntryIntervention",
            "isList": true
          },
          "attributes": []
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "event": {
          "name": "event",
          "type": "BehaviorEvent",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEvent",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [eventId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "interventionDefinition": {
          "name": "interventionDefinition",
          "type": "InterventionDefinition",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "InterventionDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [interventionDefinitionId], references: [id]"
            }
          ]
        }
      }
    },
    "SupportiveSupervision": {
      "name": "SupportiveSupervision",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "required": {
          "name": "required",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "level": {
          "name": "level",
          "type": "SupervisionLevel",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "durationMinutes": {
          "name": "durationMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reason": {
          "name": "reason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "BehaviorOutcome": {
      "name": "BehaviorOutcome",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "response": {
          "name": "response",
          "type": "OutcomeResponse",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "stabilizationMinutes": {
          "name": "stabilizationMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalated": {
          "name": "escalated",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "BehaviorFollowUp": {
      "name": "BehaviorFollowUp",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "action": {
          "name": "action",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assignedToId": {
          "name": "assignedToId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dueAt": {
          "name": "dueAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "FollowUpStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "PENDING"
            }
          ]
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "assignedTo": {
          "name": "assignedTo",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorFollowUpAssignee\", fields: [assignedToId], references: [id]"
            }
          ]
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "BehaviorNotification": {
      "name": "BehaviorNotification",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "recipientType": {
          "name": "recipientType",
          "type": "NotificationRecipient",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "recipientName": {
          "name": "recipientName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notifiedAt": {
          "name": "notifiedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "method": {
          "name": "method",
          "type": "NotificationMethod",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "BehaviorAIDraft": {
      "name": "BehaviorAIDraft",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "episodeId": {
          "name": "episodeId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceSnapshot": {
          "name": "sourceSnapshot",
          "type": "Json",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "generatedText": {
          "name": "generatedText",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "AIDraftStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "generatedAt": {
          "name": "generatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "reviewedAt": {
          "name": "reviewedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewedById": {
          "name": "reviewedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "episode": {
          "name": "episode",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [episodeId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "reviewedBy": {
          "name": "reviewedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorAIReviewer\", fields: [reviewedById], references: [id]"
            }
          ]
        }
      }
    },
    "BehaviorDefinition": {
      "name": "BehaviorDefinition",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "code": {
          "name": "code",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "number": {
          "name": "number",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isActive": {
          "name": "isActive",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "dailyLogEntryLinks": {
          "name": "dailyLogEntryLinks",
          "type": "BehaviorDailyLogEntryBehavior",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntryBehavior",
            "isList": true
          },
          "attributes": []
        },
        "behaviorEvents": {
          "name": "behaviorEvents",
          "type": "BehaviorEvent",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEvent",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "InterventionDefinition": {
      "name": "InterventionDefinition",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "code": {
          "name": "code",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "letter": {
          "name": "letter",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isActive": {
          "name": "isActive",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "dailyLogEntryLinks": {
          "name": "dailyLogEntryLinks",
          "type": "BehaviorDailyLogEntryIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntryIntervention",
            "isList": true
          },
          "attributes": []
        },
        "behaviorInterventions": {
          "name": "behaviorInterventions",
          "type": "BehaviorIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorIntervention",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "BehaviorDailyLog": {
      "name": "BehaviorDailyLog",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "logDate": {
          "name": "logDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdById": {
          "name": "createdById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "BehaviorDailyLogStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "entries": {
          "name": "entries",
          "type": "BehaviorDailyLogEntry",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntry",
            "isList": true
          },
          "attributes": []
        },
        "createdBy": {
          "name": "createdBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorDailyLogCreator\", fields: [createdById], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "BehaviorDailyLogEntry": {
      "name": "BehaviorDailyLogEntry",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "dailyLogId": {
          "name": "dailyLogId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "timeStart": {
          "name": "timeStart",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "timeEnd": {
          "name": "timeEnd",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "observation": {
          "name": "observation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "documentedById": {
          "name": "documentedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "dailyLog": {
          "name": "dailyLog",
          "type": "BehaviorDailyLog",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLog",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [dailyLogId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "documentedBy": {
          "name": "documentedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"BehaviorDailyLogDocumenter\", fields: [documentedById], references: [id]"
            }
          ]
        },
        "behaviors": {
          "name": "behaviors",
          "type": "BehaviorDailyLogEntryBehavior",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntryBehavior",
            "isList": true
          },
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "BehaviorDailyLogEntryIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntryIntervention",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "BehaviorDailyLogEntryBehavior": {
      "name": "BehaviorDailyLogEntryBehavior",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "dailyLogEntryId": {
          "name": "dailyLogEntryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorDefinitionId": {
          "name": "behaviorDefinitionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorEventId": {
          "name": "behaviorEventId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorDefinition": {
          "name": "behaviorDefinition",
          "type": "BehaviorDefinition",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [behaviorDefinitionId], references: [id]"
            }
          ]
        },
        "behaviorEvent": {
          "name": "behaviorEvent",
          "type": "BehaviorEvent",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEvent",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [behaviorEventId], references: [id]"
            }
          ]
        },
        "dailyLogEntry": {
          "name": "dailyLogEntry",
          "type": "BehaviorDailyLogEntry",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntry",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [dailyLogEntryId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "BehaviorDailyLogEntryIntervention": {
      "name": "BehaviorDailyLogEntryIntervention",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "dailyLogEntryId": {
          "name": "dailyLogEntryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventionDefinitionId": {
          "name": "interventionDefinitionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorInterventionId": {
          "name": "behaviorInterventionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorIntervention": {
          "name": "behaviorIntervention",
          "type": "BehaviorIntervention",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorIntervention",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [behaviorInterventionId], references: [id]"
            }
          ]
        },
        "dailyLogEntry": {
          "name": "dailyLogEntry",
          "type": "BehaviorDailyLogEntry",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "BehaviorDailyLogEntry",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [dailyLogEntryId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "interventionDefinition": {
          "name": "interventionDefinition",
          "type": "InterventionDefinition",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "InterventionDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [interventionDefinitionId], references: [id]"
            }
          ]
        }
      }
    },
    "CareDelivery": {
      "name": "CareDelivery",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "carePlanVersionId": {
          "name": "carePlanVersionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "deliveryDate": {
          "name": "deliveryDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "shift": {
          "name": "shift",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "documentedById": {
          "name": "documentedById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "CareDeliveryStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "summary": {
          "name": "summary",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "behaviorEpisodes": {
          "name": "behaviorEpisodes",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CareDeliveryBehaviorEpisodes\""
            }
          ]
        },
        "carePlanVersion": {
          "name": "carePlanVersion",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [carePlanVersionId], references: [id]"
            }
          ]
        },
        "documentedBy": {
          "name": "documentedBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CareDeliveryDocumenter\", fields: [documentedById], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "activities": {
          "name": "activities",
          "type": "CareDeliveryActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivity",
            "isList": true
          },
          "attributes": []
        },
        "followUps": {
          "name": "followUps",
          "type": "CareDeliveryFollowUp",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryFollowUp",
            "isList": true
          },
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "CareDeliveryIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryIntervention",
            "isList": true
          },
          "attributes": []
        },
        "observations": {
          "name": "observations",
          "type": "CareDeliveryObservation",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryObservation",
            "isList": true
          },
          "attributes": []
        },
        "outcomes": {
          "name": "outcomes",
          "type": "CareDeliveryOutcome",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryOutcome",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CareDeliveryActivity": {
      "name": "CareDeliveryActivity",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "careDeliveryId": {
          "name": "careDeliveryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "category": {
          "name": "category",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completed": {
          "name": "completed",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "taskOccurrenceId": {
          "name": "taskOccurrenceId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "status": {
          "name": "status",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "startedAt": {
          "name": "startedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "startedById": {
          "name": "startedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedById": {
          "name": "completedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completionData": {
          "name": "completionData",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "deferredUntil": {
          "name": "deferredUntil",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "deferredReason": {
          "name": "deferredReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "careDelivery": {
          "name": "careDelivery",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [careDeliveryId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "taskOccurrence": {
          "name": "taskOccurrence",
          "type": "TaskOccurrence",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [taskOccurrenceId], references: [id]"
            }
          ]
        },
        "startedBy": {
          "name": "startedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ActivityStarter\", fields: [startedById], references: [id]"
            }
          ]
        },
        "completedBy": {
          "name": "completedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ActivityCompleter\", fields: [completedById], references: [id]"
            }
          ]
        },
        "participants": {
          "name": "participants",
          "type": "CareDeliveryActivityParticipant",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivityParticipant",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CareDeliveryObservation": {
      "name": "CareDeliveryObservation",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "careDeliveryId": {
          "name": "careDeliveryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "observation": {
          "name": "observation",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "category": {
          "name": "category",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "severity": {
          "name": "severity",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "careDelivery": {
          "name": "careDelivery",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [careDeliveryId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CareDeliveryIntervention": {
      "name": "CareDeliveryIntervention",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "careDeliveryId": {
          "name": "careDeliveryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "category": {
          "name": "category",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "deliveredAt": {
          "name": "deliveredAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "durationMinutes": {
          "name": "durationMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "careDelivery": {
          "name": "careDelivery",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [careDeliveryId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CareDeliveryOutcome": {
      "name": "CareDeliveryOutcome",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "careDeliveryId": {
          "name": "careDeliveryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "outcome": {
          "name": "outcome",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "careDelivery": {
          "name": "careDelivery",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [careDeliveryId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CareDeliveryFollowUp": {
      "name": "CareDeliveryFollowUp",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "careDeliveryId": {
          "name": "careDeliveryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "action": {
          "name": "action",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assignedToId": {
          "name": "assignedToId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dueAt": {
          "name": "dueAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "FollowUpStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "PENDING"
            }
          ]
        },
        "notes": {
          "name": "notes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "assignedTo": {
          "name": "assignedTo",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CareDeliveryFollowUpAssignee\", fields: [assignedToId], references: [id]"
            }
          ]
        },
        "careDelivery": {
          "name": "careDelivery",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [careDeliveryId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "ResidentReview": {
      "name": "ResidentReview",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewDate": {
          "name": "reviewDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "trigger": {
          "name": "trigger",
          "type": "ReviewTrigger",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewerId": {
          "name": "reviewerId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "ResidentReviewStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "IN_PROGRESS"
            }
          ]
        },
        "currentNeeds": {
          "name": "currentNeeds",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "progress": {
          "name": "progress",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorTrends": {
          "name": "behaviorTrends",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventionEffectiveness": {
          "name": "interventionEffectiveness",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentFeedback": {
          "name": "residentFeedback",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "representativeFeedback": {
          "name": "representativeFeedback",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "findings": {
          "name": "findings",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "recommendations": {
          "name": "recommendations",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "decision": {
          "name": "decision",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "newVersionRequired": {
          "name": "newVersionRequired",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "resultingCarePlanVersionId": {
          "name": "resultingCarePlanVersionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedById": {
          "name": "completedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "completedBy": {
          "name": "completedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentReviewCompleter\", fields: [completedById], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resultingCarePlanVersion": {
          "name": "resultingCarePlanVersion",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [resultingCarePlanVersionId], references: [id]"
            }
          ]
        },
        "reviewer": {
          "name": "reviewer",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentReviewReviewer\", fields: [reviewerId], references: [id]"
            }
          ]
        }
      }
    },
    "ResidentClosure": {
      "name": "ResidentClosure",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "closureType": {
          "name": "closureType",
          "type": "ResidentClosureType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "closureDate": {
          "name": "closureDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "reason": {
          "name": "reason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "finalAssessmentId": {
          "name": "finalAssessmentId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "finalCarePlanVersionId": {
          "name": "finalCarePlanVersionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "outstandingMatters": {
          "name": "outstandingMatters",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "finalDocumentation": {
          "name": "finalDocumentation",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsiblePersonId": {
          "name": "responsiblePersonId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "confirmationData": {
          "name": "confirmationData",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "ResidentClosureStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "PENDING"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "finalAssessment": {
          "name": "finalAssessment",
          "type": "ResidentAssessment",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ClosureFinalAssessment\", fields: [finalAssessmentId], references: [id]"
            }
          ]
        },
        "finalCarePlanVersion": {
          "name": "finalCarePlanVersion",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [finalCarePlanVersionId], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "responsiblePerson": {
          "name": "responsiblePerson",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResidentClosureResponsiblePerson\", fields: [responsiblePersonId], references: [id]"
            }
          ]
        }
      }
    },
    "CarePlanVersion": {
      "name": "CarePlanVersion",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "carePlanId": {
          "name": "carePlanId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "versionNumber": {
          "name": "versionNumber",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "1"
            }
          ]
        },
        "assessmentId": {
          "name": "assessmentId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "VersionStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "effectiveDate": {
          "name": "effectiveDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "endDate": {
          "name": "endDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "nextReviewDate": {
          "name": "nextReviewDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdById": {
          "name": "createdById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "finalizedAt": {
          "name": "finalizedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "finalizedById": {
          "name": "finalizedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activatedAt": {
          "name": "activatedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activatedById": {
          "name": "activatedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "supersededAt": {
          "name": "supersededAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "supersededById": {
          "name": "supersededById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "supersededByVersionId": {
          "name": "supersededByVersionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "behaviorEpisodes": {
          "name": "behaviorEpisodes",
          "type": "BehaviorEpisode",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "BehaviorEpisode",
            "isList": true
          },
          "attributes": []
        },
        "careDeliveries": {
          "name": "careDeliveries",
          "type": "CareDelivery",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDelivery",
            "isList": true
          },
          "attributes": []
        },
        "activatedBy": {
          "name": "activatedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionActivator\", fields: [activatedById], references: [id]"
            }
          ]
        },
        "assessment": {
          "name": "assessment",
          "type": "ResidentAssessment",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "ResidentAssessment",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [assessmentId], references: [id]"
            }
          ]
        },
        "carePlan": {
          "name": "carePlan",
          "type": "CarePlan",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanVersions\", fields: [carePlanId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "createdBy": {
          "name": "createdBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionCreator\", fields: [createdById], references: [id]"
            }
          ]
        },
        "finalizedBy": {
          "name": "finalizedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionFinalizer\", fields: [finalizedById], references: [id]"
            }
          ]
        },
        "supersededBy": {
          "name": "supersededBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionSuperseder\", fields: [supersededById], references: [id]"
            }
          ]
        },
        "supersededByVersion": {
          "name": "supersededByVersion",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionSupersession\", fields: [supersededByVersionId], references: [id]"
            }
          ]
        },
        "supersedesVersions": {
          "name": "supersedesVersions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"VersionSupersession\""
            }
          ]
        },
        "workflowEvents": {
          "name": "workflowEvents",
          "type": "CarePlanWorkflowEvent",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflowEvent",
            "isList": true
          },
          "attributes": []
        },
        "currentFor": {
          "name": "currentFor",
          "type": "CarePlan",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CurrentCarePlanVersion\""
            }
          ]
        },
        "closures": {
          "name": "closures",
          "type": "ResidentClosure",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentClosure",
            "isList": true
          },
          "attributes": []
        },
        "residentReviews": {
          "name": "residentReviews",
          "type": "ResidentReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "ResidentReview",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CarePlan": {
      "name": "CarePlan",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "CarePlanStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "startDate": {
          "name": "startDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewDate": {
          "name": "reviewDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "endDate": {
          "name": "endDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdById": {
          "name": "createdById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "updatedById": {
          "name": "updatedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "currentVersionId": {
          "name": "currentVersionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "approval": {
          "name": "approval",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "evidence": {
          "name": "evidence",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "goals": {
          "name": "goals",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "objectives": {
          "name": "objectives",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "progress": {
          "name": "progress",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibilities": {
          "name": "responsibilities",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviews": {
          "name": "reviews",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "versions": {
          "name": "versions",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanVersions\""
            }
          ]
        },
        "workflow": {
          "name": "workflow",
          "type": "CarePlanWorkflow",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflow",
            "isList": false
          },
          "attributes": []
        },
        "createdBy": {
          "name": "createdBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanCreator\", fields: [createdById], references: [id]"
            }
          ]
        },
        "currentVersion": {
          "name": "currentVersion",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CurrentCarePlanVersion\", fields: [currentVersionId], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "updatedBy": {
          "name": "updatedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanUpdater\", fields: [updatedById], references: [id]"
            }
          ]
        }
      }
    },
    "CarePlanWorkflow": {
      "name": "CarePlanWorkflow",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "carePlanId": {
          "name": "carePlanId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "workflowStatus": {
          "name": "workflowStatus",
          "type": "CarePlanWorkflowStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "DRAFT"
            }
          ]
        },
        "draftAt": {
          "name": "draftAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "internalReviewAt": {
          "name": "internalReviewAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pendingReviewAt": {
          "name": "pendingReviewAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "pendingAcknowledgementAt": {
          "name": "pendingAcknowledgementAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "readyForActivationAt": {
          "name": "readyForActivationAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activeAt": {
          "name": "activeAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "onHoldAt": {
          "name": "onHoldAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "discontinuedAt": {
          "name": "discontinuedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "currentStage": {
          "name": "currentStage",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "events": {
          "name": "events",
          "type": "CarePlanWorkflowEvent",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflowEvent",
            "isList": true
          },
          "attributes": []
        },
        "tasks": {
          "name": "tasks",
          "type": "CarePlanWorkflowTask",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflowTask",
            "isList": true
          },
          "attributes": []
        },
        "carePlan": {
          "name": "carePlan",
          "type": "CarePlan",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlan",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [carePlanId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CarePlanWorkflowEvent": {
      "name": "CarePlanWorkflowEvent",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "workflowId": {
          "name": "workflowId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "eventType": {
          "name": "eventType",
          "type": "WorkflowEventType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "fromStatus": {
          "name": "fromStatus",
          "type": "CarePlanWorkflowStatus",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toStatus": {
          "name": "toStatus",
          "type": "CarePlanWorkflowStatus",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "performedById": {
          "name": "performedById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "performedAt": {
          "name": "performedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "comments": {
          "name": "comments",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "metadata": {
          "name": "metadata",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "versionId": {
          "name": "versionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "performedBy": {
          "name": "performedBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"WorkflowEventPerformer\", fields: [performedById], references: [id]"
            }
          ]
        },
        "version": {
          "name": "version",
          "type": "CarePlanVersion",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [versionId], references: [id]"
            }
          ]
        },
        "workflow": {
          "name": "workflow",
          "type": "CarePlanWorkflow",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflow",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [workflowId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CarePlanWorkflowTask": {
      "name": "CarePlanWorkflowTask",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "workflowId": {
          "name": "workflowId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "taskType": {
          "name": "taskType",
          "type": "WorkflowTaskType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assignedToId": {
          "name": "assignedToId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assignedToEmail": {
          "name": "assignedToEmail",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "assignedToName": {
          "name": "assignedToName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dueDate": {
          "name": "dueDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "WorkflowTaskStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "PENDING"
            }
          ]
        },
        "notificationSentAt": {
          "name": "notificationSentAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "notificationMethod": {
          "name": "notificationMethod",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "assignedTo": {
          "name": "assignedTo",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"WorkflowTaskAssignee\", fields: [assignedToId], references: [id]"
            }
          ]
        },
        "workflow": {
          "name": "workflow",
          "type": "CarePlanWorkflow",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanWorkflow",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [workflowId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CarePlanTemplate": {
      "name": "CarePlanTemplate",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "category": {
          "name": "category",
          "type": "TemplateCategory",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "STANDARD"
            }
          ]
        },
        "isActive": {
          "name": "isActive",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "isDefault": {
          "name": "isDefault",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "version": {
          "name": "version",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "1"
            }
          ]
        },
        "createdById": {
          "name": "createdById",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "updatedById": {
          "name": "updatedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "approvalRequired": {
          "name": "approvalRequired",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "approvedById": {
          "name": "approvedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "approvedAt": {
          "name": "approvedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "usageCount": {
          "name": "usageCount",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "sections": {
          "name": "sections",
          "type": "CarePlanTemplateSection",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateSection",
            "isList": true
          },
          "attributes": []
        },
        "approvedBy": {
          "name": "approvedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TemplateApprover\", fields: [approvedById], references: [id]"
            }
          ]
        },
        "createdBy": {
          "name": "createdBy",
          "type": "User",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TemplateCreator\", fields: [createdById], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id]"
            }
          ]
        },
        "updatedBy": {
          "name": "updatedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TemplateUpdater\", fields: [updatedById], references: [id]"
            }
          ]
        }
      }
    },
    "CarePlanTemplateSection": {
      "name": "CarePlanTemplateSection",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "templateId": {
          "name": "templateId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "order": {
          "name": "order",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "guidanceText": {
          "name": "guidanceText",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "required": {
          "name": "required",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "goals": {
          "name": "goals",
          "type": "CarePlanTemplateGoal",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateGoal",
            "isList": true
          },
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "CarePlanTemplateIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateIntervention",
            "isList": true
          },
          "attributes": []
        },
        "template": {
          "name": "template",
          "type": "CarePlanTemplate",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplate",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [templateId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CarePlanTemplateGoal": {
      "name": "CarePlanTemplateGoal",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "sectionId": {
          "name": "sectionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "category": {
          "name": "category",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "priority": {
          "name": "priority",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "personalizable": {
          "name": "personalizable",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "personalizationFields": {
          "name": "personalizationFields",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "condition": {
          "name": "condition",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "section": {
          "name": "section",
          "type": "CarePlanTemplateSection",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateSection",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [sectionId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "objectives": {
          "name": "objectives",
          "type": "CarePlanTemplateObjective",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateObjective",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CarePlanTemplateObjective": {
      "name": "CarePlanTemplateObjective",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "goalId": {
          "name": "goalId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "measurementType": {
          "name": "measurementType",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"FREQUENCY\""
            }
          ]
        },
        "defaultTarget": {
          "name": "defaultTarget",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "personalizable": {
          "name": "personalizable",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "goal": {
          "name": "goal",
          "type": "CarePlanTemplateGoal",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateGoal",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [goalId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CarePlanTemplateIntervention": {
      "name": "CarePlanTemplateIntervention",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "uuid("
            }
          ]
        },
        "sectionId": {
          "name": "sectionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "category": {
          "name": "category",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "defaultResponsibleRole": {
          "name": "defaultResponsibleRole",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "personalizable": {
          "name": "personalizable",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "section": {
          "name": "section",
          "type": "CarePlanTemplateSection",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanTemplateSection",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [sectionId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "TaskCategory": {
      "name": "TaskCategory",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "slug": {
          "name": "slug",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "color": {
          "name": "color",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "icon": {
          "name": "icon",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sortOrder": {
          "name": "sortOrder",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "0"
            }
          ]
        },
        "isActive": {
          "name": "isActive",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "isSystem": {
          "name": "isSystem",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "definitions": {
          "name": "definitions",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "TaskPriority": {
      "name": "TaskPriority",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "slug": {
          "name": "slug",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "weight": {
          "name": "weight",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "color": {
          "name": "color",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "isSystem": {
          "name": "isSystem",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "definitions": {
          "name": "definitions",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": []
        },
        "occurrences": {
          "name": "occurrences",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "TaskEscalationPolicy": {
      "name": "TaskEscalationPolicy",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "name": {
          "name": "name",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reminderAnchor": {
          "name": "reminderAnchor",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"dueAt\""
            }
          ]
        },
        "reminderLeadMinutes": {
          "name": "reminderLeadMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "missedAnchor": {
          "name": "missedAnchor",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"dueAt\""
            }
          ]
        },
        "missedGraceMinutes": {
          "name": "missedGraceMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalationAnchor": {
          "name": "escalationAnchor",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalationDelayMinutes": {
          "name": "escalationDelayMinutes",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalateToRole": {
          "name": "escalateToRole",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalateToUserId": {
          "name": "escalateToUserId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "active": {
          "name": "active",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "true"
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "definitions": {
          "name": "definitions",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "TaskDefinition": {
      "name": "TaskDefinition",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "facilityId": {
          "name": "facilityId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "title": {
          "name": "title",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "description": {
          "name": "description",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "categoryId": {
          "name": "categoryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "instructions": {
          "name": "instructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "responsiblePartyType": {
          "name": "responsiblePartyType",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleRoleId": {
          "name": "responsibleRoleId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleRoleName": {
          "name": "responsibleRoleName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleUserId": {
          "name": "responsibleUserId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleExternalName": {
          "name": "responsibleExternalName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "requiredStaffCount": {
          "name": "requiredStaffCount",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "1"
            }
          ]
        },
        "requiredStaffRoles": {
          "name": "requiredStaffRoles",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "mode": {
          "name": "mode",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "frequencyType": {
          "name": "frequencyType",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "frequencyConfig": {
          "name": "frequencyConfig",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "timezone": {
          "name": "timezone",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activeFrom": {
          "name": "activeFrom",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "activeUntil": {
          "name": "activeUntil",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "priorityId": {
          "name": "priorityId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalationPolicyId": {
          "name": "escalationPolicyId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"active\""
            }
          ]
        },
        "sourceModel": {
          "name": "sourceModel",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceRecordId": {
          "name": "sourceRecordId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceField": {
          "name": "sourceField",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceRowIndex": {
          "name": "sourceRowIndex",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceVersion": {
          "name": "sourceVersion",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceLastCheckedAt": {
          "name": "sourceLastCheckedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceReviewRequired": {
          "name": "sourceReviewRequired",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "sourceReviewReason": {
          "name": "sourceReviewReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "approvedDraftId": {
          "name": "approvedDraftId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "version": {
          "name": "version",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "1"
            }
          ]
        },
        "supersedesId": {
          "name": "supersedesId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "facility": {
          "name": "facility",
          "type": "Facility",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Facility",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [facilityId], references: [id]"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "category": {
          "name": "category",
          "type": "TaskCategory",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskCategory",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [categoryId], references: [id]"
            }
          ]
        },
        "priority": {
          "name": "priority",
          "type": "TaskPriority",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskPriority",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [priorityId], references: [id]"
            }
          ]
        },
        "escalationPolicy": {
          "name": "escalationPolicy",
          "type": "TaskEscalationPolicy",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskEscalationPolicy",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [escalationPolicyId], references: [id]"
            }
          ]
        },
        "responsibleUser": {
          "name": "responsibleUser",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskDefinitionResponsible\", fields: [responsibleUserId], references: [id]"
            }
          ]
        },
        "supersedes": {
          "name": "supersedes",
          "type": "TaskDefinition",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskVersion\", fields: [supersedesId], references: [id]"
            }
          ]
        },
        "supersededBy": {
          "name": "supersededBy",
          "type": "TaskDefinition",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskVersion\""
            }
          ]
        },
        "approvedDraft": {
          "name": "approvedDraft",
          "type": "TaskDraft",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskDraft",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"DraftApproval\", fields: [approvedDraftId], references: [id]"
            }
          ]
        },
        "occurrences": {
          "name": "occurrences",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "TaskOccurrence": {
      "name": "TaskOccurrence",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "facilityId": {
          "name": "facilityId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "taskDefinitionId": {
          "name": "taskDefinitionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "taskDefinitionVersion": {
          "name": "taskDefinitionVersion",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "dueAt": {
          "name": "dueAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "windowStart": {
          "name": "windowStart",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "windowEnd": {
          "name": "windowEnd",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "timezone": {
          "name": "timezone",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reminderAt": {
          "name": "reminderAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "missedAt": {
          "name": "missedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "escalateAt": {
          "name": "escalateAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "priorityId": {
          "name": "priorityId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "categoryId": {
          "name": "categoryId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsiblePartyType": {
          "name": "responsiblePartyType",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleRoleId": {
          "name": "responsibleRoleId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleUserId": {
          "name": "responsibleUserId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleExternalName": {
          "name": "responsibleExternalName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "requiredStaffCount": {
          "name": "requiredStaffCount",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "requiredStaffRoles": {
          "name": "requiredStaffRoles",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "status": {
          "name": "status",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"pending\""
            }
          ]
        },
        "startedAt": {
          "name": "startedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "startedById": {
          "name": "startedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedAt": {
          "name": "completedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completedById": {
          "name": "completedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "completionData": {
          "name": "completionData",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "deferredUntil": {
          "name": "deferredUntil",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "deferredReason": {
          "name": "deferredReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "missedAuto": {
          "name": "missedAuto",
          "type": "Boolean",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "false"
            }
          ]
        },
        "occurrenceKey": {
          "name": "occurrenceKey",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "facility": {
          "name": "facility",
          "type": "Facility",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Facility",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [facilityId], references: [id]"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "taskDefinition": {
          "name": "taskDefinition",
          "type": "TaskDefinition",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [taskDefinitionId], references: [id]"
            }
          ]
        },
        "priority": {
          "name": "priority",
          "type": "TaskPriority",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskPriority",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [priorityId], references: [id]"
            }
          ]
        },
        "startedBy": {
          "name": "startedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OccurrenceStarter\", fields: [startedById], references: [id]"
            }
          ]
        },
        "completedBy": {
          "name": "completedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"OccurrenceCompleter\", fields: [completedById], references: [id]"
            }
          ]
        },
        "careDeliveryActivities": {
          "name": "careDeliveryActivities",
          "type": "CareDeliveryActivity",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivity",
            "isList": true
          },
          "attributes": []
        },
        "logs": {
          "name": "logs",
          "type": "TaskOccurrenceLog",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrenceLog",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "TaskOccurrenceLog": {
      "name": "TaskOccurrenceLog",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "occurrenceId": {
          "name": "occurrenceId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "fromStatus": {
          "name": "fromStatus",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "toStatus": {
          "name": "toStatus",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "changedById": {
          "name": "changedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "changedAt": {
          "name": "changedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "reason": {
          "name": "reason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "metadata": {
          "name": "metadata",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "occurrence": {
          "name": "occurrence",
          "type": "TaskOccurrence",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskOccurrence",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [occurrenceId], references: [id], onDelete: Restrict"
            }
          ]
        },
        "changedBy": {
          "name": "changedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [changedById], references: [id]"
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "TaskDraft": {
      "name": "TaskDraft",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "organizationId": {
          "name": "organizationId",
          "type": "Int",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "facilityId": {
          "name": "facilityId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "residentId": {
          "name": "residentId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "extractedTitle": {
          "name": "extractedTitle",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "extractedCategory": {
          "name": "extractedCategory",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "extractedFrequency": {
          "name": "extractedFrequency",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "extractedFrequencyConfig": {
          "name": "extractedFrequencyConfig",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "extractedResponsibility": {
          "name": "extractedResponsibility",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "extractedInstructions": {
          "name": "extractedInstructions",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "sourceModel": {
          "name": "sourceModel",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceRecordId": {
          "name": "sourceRecordId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceField": {
          "name": "sourceField",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceRowIndex": {
          "name": "sourceRowIndex",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceVersion": {
          "name": "sourceVersion",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewStatus": {
          "name": "reviewStatus",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"unreviewed\""
            }
          ]
        },
        "reviewedById": {
          "name": "reviewedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewedAt": {
          "name": "reviewedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewNotes": {
          "name": "reviewNotes",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "db",
              "arguments": null
            }
          ]
        },
        "extractionConfidence": {
          "name": "extractionConfidence",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"clear\""
            }
          ]
        },
        "conflicts": {
          "name": "conflicts",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "flagSource": {
          "name": "flagSource",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "\"manual\""
            }
          ]
        },
        "flaggedById": {
          "name": "flaggedById",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "flaggedAt": {
          "name": "flaggedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "approvedDefinitionId": {
          "name": "approvedDefinitionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "unique",
              "arguments": null
            }
          ]
        },
        "createdAt": {
          "name": "createdAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "updatedAt": {
          "name": "updatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "updatedAt",
              "arguments": null
            }
          ]
        },
        "organization": {
          "name": "organization",
          "type": "Organization",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Organization",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [organizationId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "facility": {
          "name": "facility",
          "type": "Facility",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Facility",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [facilityId], references: [id]"
            }
          ]
        },
        "resident": {
          "name": "resident",
          "type": "Resident",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "Resident",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [residentId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "reviewedBy": {
          "name": "reviewedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskDraftReviewer\", fields: [reviewedById], references: [id]"
            }
          ]
        },
        "flaggedBy": {
          "name": "flaggedBy",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"TaskDraftFlagger\", fields: [flaggedById], references: [id]"
            }
          ]
        },
        "approvedDefinition": {
          "name": "approvedDefinition",
          "type": "TaskDefinition",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TaskDefinition",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"DraftApproval\""
            }
          ]
        }
      }
    },
    "CareDeliveryActivityParticipant": {
      "name": "CareDeliveryActivityParticipant",
      "fields": {
        "id": {
          "name": "id",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "id",
              "arguments": null
            },
            {
              "name": "default",
              "arguments": "cuid("
            }
          ]
        },
        "activityId": {
          "name": "activityId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "actorType": {
          "name": "actorType",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "actorUserId": {
          "name": "actorUserId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "actorName": {
          "name": "actorName",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "role": {
          "name": "role",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "participatedAt": {
          "name": "participatedAt",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "now("
            }
          ]
        },
        "activity": {
          "name": "activity",
          "type": "CareDeliveryActivity",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CareDeliveryActivity",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [activityId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "actorUser": {
          "name": "actorUser",
          "type": "User",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "User",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [actorUserId], references: [id]"
            }
          ]
        }
      }
    }
  },
  "enums": {
    "FacilityTypeEnum": [
      "ADULT_FAMILY_HOME",
      "ASSISTED_LIVING",
      "MEMORY_CARE",
      "RESIDENTIAL_CARE",
      "GROUP_HOME",
      "SUPPORTED_LIVING",
      "OTHER"
    ],
    "FacilityTypeStatus": [
      "ACTIVE",
      "INACTIVE"
    ],
    "FacilityStatus": [
      "ACTIVE",
      "INACTIVE",
      "CLOSED"
    ],
    "ResidentStatus": [
      "ACTIVE",
      "INACTIVE",
      "DISCHARGED"
    ],
    "ResidentIntakeStatus": [
      "DRAFT",
      "PROCESSING",
      "REVIEW",
      "COMPLETED",
      "FAILED"
    ],
    "NCPADLAssistanceLevel": [
      "INDEPENDENT",
      "SUPERVISION_CUEING",
      "ASSISTANCE_NEEDED",
      "TOTALLY_DEPENDENT"
    ],
    "NCPADLActivityKey": [
      "AMBULATION_MOBILITY",
      "BED_MOBILITY_TRANSFER",
      "EATING",
      "TOILETING_CONTINENCE",
      "DRESSING",
      "PERSONAL_HYGIENE",
      "BATHING",
      "FOOT_CARE",
      "SKIN_CARE"
    ],
    "NCPIADLAssistanceLevel": [
      "INDEPENDENT",
      "ASSISTANCE_NEEDED",
      "DEPENDENT"
    ],
    "NCPIADLActivityKey": [
      "MANAGING_FINANCES",
      "SHOPPING",
      "TRANSPORTATION",
      "ACTIVITIES_SOCIAL",
      "SMOKING",
      "CASE_MANAGEMENT"
    ],
    "NCPParticipantRole": [
      "RESIDENT",
      "RESIDENT_REPRESENTATIVE",
      "PARENT",
      "HEALTH_PROFESSIONAL",
      "PROVIDER",
      "OTHER"
    ],
    "UserStatus": [
      "ACTIVE",
      "INACTIVE",
      "SUSPENDED",
      "DELETED"
    ],
    "Timeframe": [
      "DAILY",
      "WEEKLY",
      "MONTHLY",
      "YEARLY"
    ],
    "PaymentStatus": [
      "PENDING",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
      "REFUNDED"
    ],
    "BillingCycle": [
      "MONTHLY",
      "YEARLY"
    ],
    "CarePlanStatus": [
      "DRAFT",
      "ACTIVE",
      "ON_HOLD",
      "COMPLETED",
      "DISCONTINUED"
    ],
    "CarePlanGoalStatus": [
      "ACTIVE",
      "ACHIEVED",
      "PARTIALLY_ACHIEVED",
      "NOT_ACHIEVED",
      "DISCONTINUED"
    ],
    "CarePlanObjectiveStatus": [
      "ACTIVE",
      "ACHIEVED",
      "PARTIALLY_ACHIEVED",
      "NOT_ACHIEVED",
      "DISCONTINUED"
    ],
    "CarePlanInterventionStatus": [
      "ACTIVE",
      "COMPLETED",
      "DISCONTINUED"
    ],
    "CarePlanProgressStatus": [
      "NO_CHANGE",
      "IMPROVING",
      "DECLINING",
      "ACHIEVED",
      "PARTIALLY_ACHIEVED"
    ],
    "CareDeliveryStatus": [
      "DRAFT",
      "FINALIZED",
      "AMENDED"
    ],
    "ReviewTrigger": [
      "SCHEDULED",
      "CHANGE_IN_CONDITION",
      "INCIDENT",
      "FAMILY_REQUEST",
      "REGULATORY",
      "OTHER"
    ],
    "ResidentReviewStatus": [
      "IN_PROGRESS",
      "COMPLETE",
      "SUPERSEDED",
      "ARCHIVED"
    ],
    "ResidentClosureType": [
      "DISCHARGE",
      "TRANSFER",
      "CLOSURE",
      "DECEASED",
      "OTHER"
    ],
    "ResidentClosureStatus": [
      "PENDING",
      "COMPLETED",
      "CANCELLED"
    ],
    "AssessmentStatus": [
      "IN_PROGRESS",
      "COMPLETE",
      "SUPERSEDED",
      "ARCHIVED"
    ],
    "VersionStatus": [
      "DRAFT",
      "UNDER_REVIEW",
      "APPROVED",
      "ACTIVE",
      "SUPERSEDED",
      "DISCONTINUED"
    ],
    "ResponsibleType": [
      "USER",
      "ROLE",
      "EXTERNAL",
      "OTHER"
    ],
    "ResponsibilityStatus": [
      "ACTIVE",
      "COMPLETED",
      "OVERDUE",
      "DISCONTINUED"
    ],
    "ApprovalType": [
      "RESIDENT",
      "REPRESENTATIVE",
      "AUTHORIZED_PROFESSIONAL",
      "AFH_REPRESENTATIVE",
      "OTHER"
    ],
    "ApprovalDecision": [
      "APPROVED",
      "APPROVED_WITH_CONDITIONS",
      "REJECTED",
      "PENDING",
      "ACKNOWLEDGED"
    ],
    "AcknowledgementMethod": [
      "IN_PERSON",
      "DIGITAL_SIGNATURE",
      "EMAIL_CONFIRMATION",
      "VIDEO_CALL",
      "PAPER_FORM",
      "PORTAL",
      "OTHER"
    ],
    "EvidenceType": [
      "BEHAVIOR_OBSERVATION",
      "PROGRESS_NOTE",
      "GOAL_ACHIEVEMENT",
      "ASSESSMENT_RESULT",
      "CAREGIVER_OBSERVATION",
      "FAMILY_INPUT",
      "RESIDENT_PREFERENCE",
      "MEDICAL_RECORD",
      "OTHER"
    ],
    "EvidenceSourceType": [
      "BEHAVIOR_EPISODE",
      "BEHAVIOR_EVENT",
      "CARE_PLAN_PROGRESS",
      "CARE_PLAN_GOAL",
      "CARE_PLAN_OBJECTIVE",
      "DAILY_LOG",
      "ASSESSMENT",
      "EXTERNAL",
      "OTHER"
    ],
    "EvidenceSurfacedBy": [
      "SYSTEM",
      "CAREGIVER",
      "ADMINISTRATOR",
      "FAMILY",
      "RESIDENT"
    ],
    "EvidenceRelevance": [
      "HIGH",
      "MEDIUM",
      "LOW",
      "NOT_RELEVANT"
    ],
    "CarePlanWorkflowStatus": [
      "DRAFT",
      "INTERNAL_REVIEW",
      "PENDING_REVIEW",
      "PENDING_ACKNOWLEDGEMENT",
      "READY_FOR_ACTIVATION",
      "ACTIVE",
      "ON_HOLD",
      "COMPLETED",
      "DISCONTINUED"
    ],
    "WorkflowEventType": [
      "CREATED",
      "STARTED_INTERNAL_REVIEW",
      "SUBMITTED_FOR_REVIEW",
      "REVIEW_APPROVED",
      "REVIEW_REJECTED",
      "REVIEW_REQUIRES_CHANGES",
      "SUBMITTED_FOR_ACKNOWLEDGEMENT",
      "ACKNOWLEDGED",
      "ACTIVATED",
      "PLACED_ON_HOLD",
      "RESUMED",
      "COMPLETED",
      "DISCONTINUED",
      "AMENDED",
      "VERSION_CREATED"
    ],
    "WorkflowTaskType": [
      "REVIEW",
      "APPROVAL",
      "ACKNOWLEDGEMENT",
      "ACTION_REQUIRED",
      "FOLLOW_UP",
      "DOCUMENTATION",
      "OTHER"
    ],
    "WorkflowTaskStatus": [
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED",
      "OVERDUE"
    ],
    "TemplateCategory": [
      "STANDARD",
      "BEHAVIORAL",
      "DEMENTIA_CARE",
      "DEVELOPMENTAL",
      "MEDICAL",
      "TRANSITION",
      "PALLIATIVE",
      "OTHER"
    ],
    "BehaviorDailyLogStatus": [
      "DRAFT",
      "FINALIZED",
      "AMENDED"
    ],
    "BehaviorEpisodeStatus": [
      "DRAFT",
      "FINALIZED",
      "AMENDED"
    ],
    "BehaviorType": [
      "AGGRESSION",
      "THREATENING_BEHAVIOR",
      "EXIT_SEEKING",
      "WANDERING",
      "PROPERTY_DESTRUCTION",
      "DISRUPTIVE_BEHAVIOR",
      "VERBAL_ESCALATION",
      "OTHER"
    ],
    "BehaviorSeverity": [
      "LOW",
      "MODERATE",
      "HIGH"
    ],
    "FrequencyType": [
      "SINGLE",
      "REPEATED",
      "INTERMITTENT",
      "CONTINUOUS"
    ],
    "InterventionType": [
      "REDIRECTION",
      "REASSURANCE",
      "VERBAL_PROMPTING",
      "DE_ESCALATION",
      "ENVIRONMENTAL_CHANGE",
      "ONE_TO_ONE_SUPPORT",
      "SAFETY_MEASURE",
      "OTHER"
    ],
    "SupervisionLevel": [
      "INCREASED_OBSERVATION",
      "CLOSE_SUPERVISION",
      "ONE_TO_ONE",
      "CONTINUOUS",
      "OTHER"
    ],
    "OutcomeResponse": [
      "STABILIZED",
      "RETURNED_TO_BASELINE",
      "REDUCED",
      "CONTINUED",
      "ESCALATED",
      "EMERGENCY_RESPONSE",
      "OTHER"
    ],
    "FollowUpStatus": [
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED",
      "CANCELLED"
    ],
    "NotificationRecipient": [
      "SUPERVISOR",
      "ADMINISTRATOR",
      "FAMILY",
      "CASE_MANAGER",
      "HEALTHCARE_PROVIDER",
      "EMERGENCY_SERVICES",
      "OTHER"
    ],
    "NotificationMethod": [
      "PHONE",
      "SMS",
      "EMAIL",
      "IN_PERSON",
      "OTHER"
    ],
    "AIDraftStatus": [
      "DRAFT",
      "ACCEPTED",
      "REJECTED",
      "SUPERSEDED"
    ]
  }
};
