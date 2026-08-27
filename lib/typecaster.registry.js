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
        "reviewedCarePlans": {
          "name": "reviewedCarePlans",
          "type": "CarePlanReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanReview",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanReviewer\""
            }
          ]
        },
        "recordedCarePlanProgress": {
          "name": "recordedCarePlanProgress",
          "type": "CarePlanProgress",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanProgress",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"CarePlanProgressRecorder\""
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
        "responsibilityUsers": {
          "name": "responsibilityUsers",
          "type": "CarePlanResponsibility",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanResponsibility",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResponsibilityUser\""
            }
          ]
        },
        "createdResponsibilities": {
          "name": "createdResponsibilities",
          "type": "CarePlanResponsibility",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanResponsibility",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ResponsibilityCreator\""
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
        "documentedCarePlanEvidence": {
          "name": "documentedCarePlanEvidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"EvidenceDocumenter\""
            }
          ]
        },
        "reviewedCarePlanEvidence": {
          "name": "reviewedCarePlanEvidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
            "isList": true
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"EvidenceReviewer\""
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
        "physicalAddress": {
          "name": "physicalAddress",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "map",
              "arguments": "\"physical_address\""
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
        "firstName": {
          "name": "firstName",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "lastName": {
          "name": "lastName",
          "type": "String",
          "nullable": false,
          "required": true,
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
        "CarePlanProgress": {
          "name": "CarePlanProgress",
          "type": "CarePlanProgress",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanProgress",
            "isList": true
          },
          "attributes": []
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
              "arguments": "fields: [carePlanVersionId], references: [id], onDelete: SetNull"
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
              "arguments": "fields: [behaviorEventId], references: [id], onDelete: SetNull"
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
              "arguments": "fields: [behaviorInterventionId], references: [id], onDelete: SetNull"
            }
          ]
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
              "arguments": "\"CarePlanCreator\", fields: [createdById], references: [id]"
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
        "reviews": {
          "name": "reviews",
          "type": "CarePlanReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanReview",
            "isList": true
          },
          "attributes": []
        },
        "approvals": {
          "name": "approvals",
          "type": "CarePlanApproval",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanApproval",
            "isList": true
          },
          "attributes": []
        },
        "evidence": {
          "name": "evidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
            "isList": true
          },
          "attributes": []
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
        }
      }
    },
    "CarePlanGoal": {
      "name": "CarePlanGoal",
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
        "versionId": {
          "name": "versionId",
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
        "status": {
          "name": "status",
          "type": "CarePlanGoalStatus",
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
        "priority": {
          "name": "priority",
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
        "targetDate": {
          "name": "targetDate",
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
        "version": {
          "name": "version",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [versionId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "objectives": {
          "name": "objectives",
          "type": "CarePlanObjective",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanObjective",
            "isList": true
          },
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "CarePlanIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanIntervention",
            "isList": true
          },
          "attributes": []
        },
        "progress": {
          "name": "progress",
          "type": "CarePlanProgress",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanProgress",
            "isList": true
          },
          "attributes": []
        },
        "evidence": {
          "name": "evidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CarePlanObjective": {
      "name": "CarePlanObjective",
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
        "measurement": {
          "name": "measurement",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "targetValue": {
          "name": "targetValue",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "targetDate": {
          "name": "targetDate",
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
          "type": "CarePlanObjectiveStatus",
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
        "goal": {
          "name": "goal",
          "type": "CarePlanGoal",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanGoal",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [goalId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "interventions": {
          "name": "interventions",
          "type": "CarePlanIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanIntervention",
            "isList": true
          },
          "attributes": []
        },
        "progress": {
          "name": "progress",
          "type": "CarePlanProgress",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanProgress",
            "isList": true
          },
          "attributes": []
        },
        "evidence": {
          "name": "evidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CarePlanIntervention": {
      "name": "CarePlanIntervention",
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
        "versionId": {
          "name": "versionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "goalId": {
          "name": "goalId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "objectiveId": {
          "name": "objectiveId",
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
          "attributes": []
        },
        "frequency": {
          "name": "frequency",
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
          "type": "CarePlanInterventionStatus",
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
        "version": {
          "name": "version",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [versionId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "goal": {
          "name": "goal",
          "type": "CarePlanGoal",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanGoal",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [goalId], references: [id], onDelete: SetNull"
            }
          ]
        },
        "objective": {
          "name": "objective",
          "type": "CarePlanObjective",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanObjective",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [objectiveId], references: [id], onDelete: SetNull"
            }
          ]
        },
        "responsibilities": {
          "name": "responsibilities",
          "type": "CarePlanResponsibility",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanResponsibility",
            "isList": true
          },
          "attributes": []
        },
        "evidence": {
          "name": "evidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
            "isList": true
          },
          "attributes": []
        }
      }
    },
    "CarePlanReview": {
      "name": "CarePlanReview",
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
        "versionId": {
          "name": "versionId",
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
        "outcome": {
          "name": "outcome",
          "type": "String",
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
        "reviewedById": {
          "name": "reviewedById",
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
        },
        "version": {
          "name": "version",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [versionId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "reviewedBy": {
          "name": "reviewedBy",
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
              "arguments": "\"CarePlanReviewer\", fields: [reviewedById], references: [id]"
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
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ReviewWorkflowEvent\""
            }
          ]
        },
        "workflowTasks": {
          "name": "workflowTasks",
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
        }
      }
    },
    "CarePlanProgress": {
      "name": "CarePlanProgress",
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
        "versionId": {
          "name": "versionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "goalId": {
          "name": "goalId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "objectiveId": {
          "name": "objectiveId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "progressDate": {
          "name": "progressDate",
          "type": "DateTime",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "note": {
          "name": "note",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "progressStatus": {
          "name": "progressStatus",
          "type": "CarePlanProgressStatus",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "NO_CHANGE"
            }
          ]
        },
        "recordedById": {
          "name": "recordedById",
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
        "version": {
          "name": "version",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [versionId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "goal": {
          "name": "goal",
          "type": "CarePlanGoal",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanGoal",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [goalId], references: [id], onDelete: SetNull"
            }
          ]
        },
        "objective": {
          "name": "objective",
          "type": "CarePlanObjective",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanObjective",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [objectiveId], references: [id], onDelete: SetNull"
            }
          ]
        },
        "recordedBy": {
          "name": "recordedBy",
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
              "arguments": "\"CarePlanProgressRecorder\", fields: [recordedById], references: [id]"
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
          "nullable": false,
          "required": true,
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
        "approvals": {
          "name": "approvals",
          "type": "CarePlanApproval",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanApproval",
            "isList": true
          },
          "attributes": []
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
        "assessmentData": {
          "name": "assessmentData",
          "type": "Json",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": null
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
        "goals": {
          "name": "goals",
          "type": "CarePlanGoal",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanGoal",
            "isList": true
          },
          "attributes": []
        },
        "interventions": {
          "name": "interventions",
          "type": "CarePlanIntervention",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanIntervention",
            "isList": true
          },
          "attributes": []
        },
        "responsibilities": {
          "name": "responsibilities",
          "type": "CarePlanResponsibility",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanResponsibility",
            "isList": true
          },
          "attributes": []
        },
        "reviews": {
          "name": "reviews",
          "type": "CarePlanReview",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanReview",
            "isList": true
          },
          "attributes": []
        },
        "approvals": {
          "name": "approvals",
          "type": "CarePlanApproval",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanApproval",
            "isList": true
          },
          "attributes": []
        },
        "progress": {
          "name": "progress",
          "type": "CarePlanProgress",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanProgress",
            "isList": true
          },
          "attributes": []
        },
        "evidence": {
          "name": "evidence",
          "type": "CarePlanEvidence",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "CarePlanEvidence",
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
        }
      }
    },
    "CarePlanResponsibility": {
      "name": "CarePlanResponsibility",
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
        "versionId": {
          "name": "versionId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventionId": {
          "name": "interventionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleType": {
          "name": "responsibleType",
          "type": "ResponsibleType",
          "nullable": false,
          "required": true,
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
              "arguments": "\"ResponsibilityUser\", fields: [responsibleUserId], references: [id]"
            }
          ]
        },
        "responsibleRole": {
          "name": "responsibleRole",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "responsibleName": {
          "name": "responsibleName",
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
        "frequency": {
          "name": "frequency",
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
        "status": {
          "name": "status",
          "type": "ResponsibilityStatus",
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
              "arguments": "\"ResponsibilityCreator\", fields: [createdById], references: [id]"
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
        "version": {
          "name": "version",
          "type": "CarePlanVersion",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanVersion",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [versionId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "intervention": {
          "name": "intervention",
          "type": "CarePlanIntervention",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanIntervention",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [interventionId], references: [id], onDelete: Cascade"
            }
          ]
        }
      }
    },
    "CarePlanApproval": {
      "name": "CarePlanApproval",
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
        "approverType": {
          "name": "approverType",
          "type": "ApprovalType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "AUTHORIZED_PROFESSIONAL"
            }
          ]
        },
        "approverId": {
          "name": "approverId",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "approverName": {
          "name": "approverName",
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
        "decision": {
          "name": "decision",
          "type": "ApprovalDecision",
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
        "signedAt": {
          "name": "signedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "signatureMetadata": {
          "name": "signatureMetadata",
          "type": "Json",
          "nullable": true,
          "required": false,
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
        "acknowledgedAt": {
          "name": "acknowledgedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "acknowledgedVia": {
          "name": "acknowledgedVia",
          "type": "AcknowledgementMethod",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "validUntil": {
          "name": "validUntil",
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
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ApprovalWorkflowEvent\""
            }
          ]
        },
        "workflowTasks": {
          "name": "workflowTasks",
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
        }
      }
    },
    "CarePlanEvidence": {
      "name": "CarePlanEvidence",
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
        "goalId": {
          "name": "goalId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "objectiveId": {
          "name": "objectiveId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "interventionId": {
          "name": "interventionId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "evidenceType": {
          "name": "evidenceType",
          "type": "EvidenceType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceType": {
          "name": "sourceType",
          "type": "EvidenceSourceType",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceId": {
          "name": "sourceId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "sourceTable": {
          "name": "sourceTable",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
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
        "excerpt": {
          "name": "excerpt",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relevance": {
          "name": "relevance",
          "type": "EvidenceRelevance",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "relevanceScore": {
          "name": "relevanceScore",
          "type": "Float",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "observedAt": {
          "name": "observedAt",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "documentedBy": {
          "name": "documentedBy",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "documentedByUser": {
          "name": "documentedByUser",
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
              "arguments": "\"EvidenceDocumenter\", fields: [documentedBy], references: [id]"
            }
          ]
        },
        "surfacedBy": {
          "name": "surfacedBy",
          "type": "EvidenceSurfacedBy",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "default",
              "arguments": "SYSTEM"
            }
          ]
        },
        "surfacedByUser": {
          "name": "surfacedByUser",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "surfacedAt": {
          "name": "surfacedAt",
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
        "reviewedBy": {
          "name": "reviewedBy",
          "type": "Int",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "reviewedByUser": {
          "name": "reviewedByUser",
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
              "arguments": "\"EvidenceReviewer\", fields: [reviewedBy], references: [id]"
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
        "includedInPlan": {
          "name": "includedInPlan",
          "type": "Boolean",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "excludedReason": {
          "name": "excludedReason",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
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
        "goal": {
          "name": "goal",
          "type": "CarePlanGoal",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanGoal",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [goalId], references: [id]"
            }
          ]
        },
        "objective": {
          "name": "objective",
          "type": "CarePlanObjective",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanObjective",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [objectiveId], references: [id]"
            }
          ]
        },
        "intervention": {
          "name": "intervention",
          "type": "CarePlanIntervention",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanIntervention",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [interventionId], references: [id]"
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
        "reviewId": {
          "name": "reviewId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "approvalId": {
          "name": "approvalId",
          "type": "String",
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
        "review": {
          "name": "review",
          "type": "CarePlanReview",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanReview",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ReviewWorkflowEvent\", fields: [reviewId], references: [id]"
            }
          ]
        },
        "approval": {
          "name": "approval",
          "type": "CarePlanApproval",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanApproval",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "\"ApprovalWorkflowEvent\", fields: [approvalId], references: [id]"
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
        "reviewId": {
          "name": "reviewId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "approvalId": {
          "name": "approvalId",
          "type": "String",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
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
        },
        "review": {
          "name": "review",
          "type": "CarePlanReview",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanReview",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [reviewId], references: [id]"
            }
          ]
        },
        "approval": {
          "name": "approval",
          "type": "CarePlanApproval",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "CarePlanApproval",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [approvalId], references: [id]"
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
    "TypeCasterDemo": {
      "name": "TypeCasterDemo",
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
        "score": {
          "name": "score",
          "type": "Float",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "amount": {
          "name": "amount",
          "type": "Decimal",
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
        "bigNumber": {
          "name": "bigNumber",
          "type": "BigInt",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "birthDate": {
          "name": "birthDate",
          "type": "DateTime",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "contactData": {
          "name": "contactData",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "editor",
              "arguments": null
            },
            {
              "name": "editor",
              "arguments": "predefined-key-values email:email mobile:number url:url"
            }
          ]
        },
        "preferences": {
          "name": "preferences",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "tags": {
          "name": "tags",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "attributes": {
          "name": "attributes",
          "type": "Json",
          "nullable": true,
          "required": false,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "editor",
              "arguments": null
            },
            {
              "name": "editor",
              "arguments": "custom-key-value key:text value:text"
            }
          ]
        },
        "statuses": {
          "name": "statuses",
          "type": "TypeCasterDemoStatus",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": false,
          "relation": null,
          "attributes": [
            {
              "name": "selected",
              "arguments": null
            }
          ]
        },
        "contacts": {
          "name": "contacts",
          "type": "TypeCasterDemoContact",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TypeCasterDemoContact",
            "isList": true
          },
          "attributes": []
        },
        "children": {
          "name": "children",
          "type": "TypeCasterDemoChild",
          "nullable": false,
          "required": true,
          "isList": true,
          "isRelation": true,
          "relation": {
            "model": "TypeCasterDemoChild",
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
        }
      }
    },
    "TypeCasterDemoContact": {
      "name": "TypeCasterDemoContact",
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
        "demoId": {
          "name": "demoId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "demo": {
          "name": "demo",
          "type": "TypeCasterDemo",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TypeCasterDemo",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [demoId], references: [id], onDelete: Cascade"
            }
          ]
        },
        "label": {
          "name": "label",
          "type": "String",
          "nullable": false,
          "required": true,
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
        }
      }
    },
    "TypeCasterDemoChild": {
      "name": "TypeCasterDemoChild",
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
        "demoId": {
          "name": "demoId",
          "type": "String",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": false,
          "relation": null,
          "attributes": []
        },
        "demo": {
          "name": "demo",
          "type": "TypeCasterDemo",
          "nullable": false,
          "required": true,
          "isList": false,
          "isRelation": true,
          "relation": {
            "model": "TypeCasterDemo",
            "isList": false
          },
          "attributes": [
            {
              "name": "relation",
              "arguments": "fields: [demoId], references: [id], onDelete: Cascade"
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
        }
      }
    }
  },
  "enums": {
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
    "ResidentStatus": [
      "ACTIVE",
      "INACTIVE",
      "DISCHARGED"
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
    ],
    "TypeCasterDemoStatus": [
      "ACTIVE",
      "INACTIVE",
      "PENDING"
    ]
  }
};
